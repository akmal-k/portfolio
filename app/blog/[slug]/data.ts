export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  accent: { bg: string; text: string; border: string };
  sections: { heading: string; body: string; code?: string; language?: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "react-native-performance",
    title: "React Native performance: what actually moves the needle",
    excerpt:
      "Most React Native performance advice targets the wrong things. Here's what genuinely matters — from the JS thread to the new architecture.",
    date: "Mar 2025",
    readTime: "6 min read",
    tag: "React Native",
    accent: { bg: "#EEEDFE", text: "#534AB7", border: "#AFA9EC" },
    sections: [
      {
        heading: "The two-thread model",
        body: `React Native runs your JavaScript on a separate thread from the UI thread. Everything you see on screen — layout, animations, touch response — lives on the UI thread. Your business logic, state updates, and component renders happen on the JS thread.

Communication between the two threads used to go through a serialized JSON bridge. Every setState, every event handler, every animated value had to be serialized, sent across the bridge, deserialized, and acted upon. This bridge was the primary source of performance problems in classic React Native.

Understanding this model is the prerequisite for understanding every performance optimization. If an animation stutters, the question is always: is the JS thread involved? If it is, you have a problem.`,
      },
      {
        heading: "The New Architecture: JSI and Fabric",
        body: `The New Architecture replaces the bridge with JSI (JavaScript Interface) — a C++ layer that lets JavaScript directly reference and call native objects without serialization. The call is synchronous and has near-zero overhead compared to the bridge.

Fabric is the new rendering system built on JSI. It recalculates layout on a background thread and commits changes to the UI thread atomically. This eliminates the most common source of frame drops: layout thrashing caused by JS thread congestion.

The New Architecture has been stable since React Native 0.74. If you're starting a new project, enable it from day one. For existing projects, migration requires auditing third-party libraries for JSI compatibility — most major ones (React Navigation, Reanimated, MMKV) already support it.`,
      },
      {
        heading: "Animations: always use the UI thread",
        body: `Any animation driven by JavaScript state will drop frames when the JS thread is busy. The rule is simple: animations must run entirely on the UI thread.

React Native Reanimated 2+ achieves this through worklets — small JavaScript functions that are serialized to C++ and executed directly on the UI thread. Your animation logic runs at 60fps regardless of what your JS thread is doing.

Avoid the Animated API with useNativeDriver: false — it runs on the JS thread and will stutter. Always pass useNativeDriver: true, and for anything complex, use Reanimated worklets instead.`,
        code: `import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export function PressableCard({ children }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={animatedStyle}
      onTouchStart={() => { scale.value = withSpring(0.96); }}
      onTouchEnd={() => { scale.value = withSpring(1); }}
    >
      {children}
    </Animated.View>
  );
}`,
        language: "typescript",
      },
      {
        heading: "FlatList: the most misused component",
        body: `FlatList is React Native's virtualized list — it only renders items currently visible on screen. But there are several ways to accidentally defeat this optimization.

Avoid anonymous functions as renderItem. A new function reference is created on every render, causing every visible item to re-render even if its data hasn't changed. Extract renderItem to a component and wrap it with React.memo.

Set getItemLayout whenever your items have a fixed height. This lets FlatList skip measurement entirely and jump directly to any position — critical for performance with large lists.

Keep keyExtractor stable. Using the array index as a key causes React to remount items when the list order changes. Use a stable ID from your data.`,
        code: `const renderItem = React.memo(({ item }: { item: Item }) => (
  <ItemCard data={item} />
));

<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  getItemLayout={(_, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={5}
/>`,
        language: "typescript",
      },
      {
        heading: "Memo and callback: use them selectively",
        body: `React.memo, useMemo, and useCallback have a cost. They store the previous value, compare dependencies on every render, and return the cached version if nothing changed. If your component is cheap to render, memo makes it slower.

The useful cases for memo: components that render frequently (list items, animation frames) and components with expensive render logic (charts, complex layouts). Don't wrap everything — profile first.

The Flipper profiler and React DevTools' Profiler tab will show you exactly which components are re-rendering and how long each render takes. Optimize what the profiler shows, not what you guess might be slow.`,
      },
      {
        heading: "Startup time",
        body: `Cold start time — the time between the user tapping the icon and seeing your first screen — is dominated by the JavaScript bundle parse time. Reducing bundle size directly reduces startup time.

Metro Bundler supports tree shaking for ES modules. Avoid barrel exports (index.ts files that re-export everything from a directory) — they force the bundler to include the entire module even if you only use one export.

Use dynamic imports for screens that aren't part of the initial route. React Navigation's lazy option defers loading a screen's code until the user navigates to it.

Hermes — the JavaScript engine shipped with React Native — compiles JavaScript to bytecode at build time. This eliminates parse time at startup entirely. Hermes is enabled by default in new React Native projects and should be kept on.`,
      },
    ],
  },
  {
    slug: "graphql-apollo-patterns",
    title: "GraphQL + Apollo Client patterns that actually scale",
    excerpt:
      "Practical patterns for using GraphQL in production — caching strategies, optimistic updates, fragment colocation, and error handling that doesn't fail silently.",
    date: "Jan 2025",
    readTime: "7 min read",
    tag: "GraphQL",
    accent: { bg: "#E1F5EE", text: "#085041", border: "#9FE1CB" },
    sections: [
      {
        heading: "Why GraphQL solves a real problem",
        body: `REST works well until your UI gets complex. Mobile screens often need data from multiple resources — a single screen might need a user profile, their recent activity, and a list of recommendations. In REST, that's three requests, or one over-engineered bespoke endpoint that couples your backend to a specific screen's requirements.

GraphQL lets the client declare exactly what it needs in a single query. The server returns precisely that — nothing more, nothing less. On mobile where bandwidth and latency matter, this distinction is meaningful: no overfetching large payloads, no underfetching that forces waterfall requests.

Apollo Client adds a normalized client-side cache on top. Data is stored by type and ID — if the same user appears in two different queries, it's stored once and both queries reflect updates automatically.`,
      },
      {
        heading: "Fragment colocation — the most underused pattern",
        body: `The most common GraphQL mistake is writing queries at the page level that enumerate every field the page needs. This breaks down fast as components multiply.

Fragment colocation means each component declares its own data requirements as a GraphQL fragment, and the page query composes those fragments. When a component's data needs change, you update its fragment — not the parent query.

This creates a direct connection between a component and its data contract. You can delete a component and its fragment together, and the TypeScript compiler will tell you if the parent query references fields that no longer exist.`,
        code: `// ClinicCard.tsx
export const CLINIC_CARD_FRAGMENT = gql\`
  fragment ClinicCardFields on Clinic {
    id
    name
    distance
    rating
    isOpen
    specialties { id name }
  }
\`;

// HomeScreen.tsx — composed from fragments
const HOME_QUERY = gql\`
  query HomeScreen {
    nearbyClinics {
      ...ClinicCardFields
    }
    featuredDoctors {
      ...DoctorCardFields
    }
  }
  \${CLINIC_CARD_FRAGMENT}
  \${DOCTOR_CARD_FRAGMENT}
\`;`,
        language: "typescript",
      },
      {
        heading: "Cache policies: know when to deviate from the default",
        body: `Apollo's default fetch policy is cache-first — return cached data immediately, skip the network if the cache has a result. This is correct for most data but wrong for anything time-sensitive.

cache-first: Stable reference data — categories, configuration, user settings. Users get instant responses and data is only re-fetched when the cache is empty.

cache-and-network: Feeds, lists, and dashboards where freshness matters but perceived speed is also important. The cached version appears instantly; the UI updates silently when fresh data arrives.

network-only: Anything financial, medical, or security-related. Never risk showing stale data here. The extra latency is the correct tradeoff.

cache-only: Rarely used directly, but useful after writing to the cache via optimistic updates — you can read from cache to confirm the write before the server responds.`,
      },
      {
        heading: "Optimistic updates without cache corruption",
        body: `Optimistic updates make mutations feel instant — you update the UI before the server confirms. The most common mistake is providing an incomplete optimisticResponse, which corrupts the cache silently.

Apollo normalizes its cache using __typename + id. If your optimistic response is missing __typename, Apollo can't match the response to the cached object and creates a ghost entry. Always include __typename at every level of the response, even nested objects.`,
        code: `const [markAsRead] = useMutation(MARK_NOTIFICATION_READ, {
  optimisticResponse: {
    markNotificationRead: {
      __typename: 'Notification',  // required — without this the cache breaks
      id: notification.id,
      isRead: true,
      readAt: new Date().toISOString(),
    },
  },
  update(cache, { data }) {
    cache.modify({
      id: cache.identify({ __typename: 'Notification', id: notification.id }),
      fields: {
        isRead: () => true,
        readAt: () => data.markNotificationRead.readAt,
      },
    });
  },
});`,
        language: "typescript",
      },
      {
        heading: "Error handling that doesn't swallow failures",
        body: `Apollo surfaces two distinct error types that most developers conflate. Network errors occur when the HTTP request fails entirely — the server is down, the user is offline. GraphQL errors occur when the request succeeds but the server returns errors in the response body.

Checking only the loading/error state from useQuery will miss GraphQL errors if your server returns a 200 with an errors array. Always inspect data?.errors alongside the top-level error.

Use Apollo's error link (onError) to intercept errors globally before they reach components. This is the right place to handle authentication failures (401 → redirect to login), log errors to Sentry, and retry on network failure. Components should handle application-level errors; infrastructure errors belong in the link chain.`,
      },
      {
        heading: "Cursor-based pagination with fetchMore",
        body: `Offset pagination (page 1, 2, 3) breaks when new items are inserted — item 10 on page 1 becomes item 11 when a new post appears, causing duplicates in infinite scroll. Cursor-based pagination avoids this by anchoring to a specific item rather than a position.

Apollo's fetchMore appends new pages to the existing cache, but only if you provide a correct merge function in your type policy. Without it, each fetchMore call replaces the cached list instead of extending it.`,
        code: `const client = new ApolloClient({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          keyArgs: ['filter'],  // cache separately per filter
          merge(existing = { items: [] }, incoming) {
            return {
              ...incoming,
              items: [...existing.items, ...incoming.items],
            };
          },
        },
      },
    },
  },
});

// In your component
const { data, fetchMore } = useQuery(FEED_QUERY);

const loadMore = () => {
  fetchMore({
    variables: { cursor: data.feed.pageInfo.endCursor },
  });
};`,
        language: "typescript",
      },
    ],
  },
  {
    slug: "realtime-notifications-rn",
    title: "Building a real-time notification system in React Native",
    excerpt:
      "A practical guide to layered notification architecture — covering push delivery, WebSocket connections, in-app state, and AppState reconciliation.",
    date: "Nov 2024",
    readTime: "6 min read",
    tag: "Architecture",
    accent: { bg: "#E6F1FB", text: "#0C447C", border: "#B5D4F4" },
    sections: [
      {
        heading: "Why notifications need a layered approach",
        body: `A notification system in a mobile app has to handle three distinct states: the app is closed, the app is backgrounded, and the app is open and active. Each state requires a different delivery mechanism, and relying on any single mechanism for all three creates gaps.

Push notifications (APNs on iOS, FCM on Android) cover the closed and backgrounded states. But they're unreliable — the OS can throttle or silently drop them based on power state, notification settings, and delivery volume. They also have latency: a push goes through Firebase or Apple's servers before reaching the device.

For an open app, push notifications don't show as banners — they arrive silently and require your code to handle them manually. A WebSocket connection is the right tool here: zero latency, full control.

The solution is layers: push for background delivery, WebSocket for foreground delivery, and a reconciliation step when the app returns to the foreground.`,
      },
      {
        heading: "Layer 1: push notifications with FCM and APNs",
        body: `Firebase Cloud Messaging (FCM) handles delivery to both Android and iOS (it wraps APNs for iOS). Your backend sends a notification payload to FCM with a device token; FCM delivers it to the device.

On React Native, @notifee/react-native or react-native-push-notification handle receiving and displaying push notifications. Both libraries provide a background handler — a function registered at the module level (outside any component) that processes notifications when the app is not active.

Request notification permissions early but not immediately on first launch. Show a permission rationale screen first explaining why notifications are useful. iOS grants permissions once — if the user declines, you can't ask again without sending them to Settings.`,
        code: `// index.js — registered at module level, outside React tree
import notifee, { EventType } from '@notifee/react-native';

notifee.onBackgroundEvent(async ({ type, detail }) => {
  if (type === EventType.PRESS) {
    // Handle notification tap while app was backgrounded
    await navigateToNotification(detail.notification);
  }
});`,
        language: "typescript",
      },
      {
        heading: "Layer 2: WebSocket for foreground delivery",
        body: `When the app is active, a persistent WebSocket connection delivers notifications with zero latency and no push overhead. The connection must survive network switches (WiFi to cellular), brief disconnections, and app lifecycle events.

Implement exponential backoff for reconnection: start at 1 second, double on each failure, cap at 30 seconds. Reset the delay to 1 second on a successful connection. Listen to NetInfo for network state changes and force a reconnect when connectivity is restored — the WebSocket may be stale without emitting a close event.

Manage the connection as a singleton service, not inside a React component. A component-bound WebSocket would disconnect on unmount (navigation changes, modals). The singleton persists for the app's lifetime; React components subscribe to it through a context.`,
        code: `class NotificationSocket {
  private ws: WebSocket | null = null;
  private retryDelay = 1000;
  private listeners = new Set<(event: NotificationEvent) => void>();

  connect(token: string) {
    this.ws = new WebSocket(\`wss://yourapi.com/notifications?token=\${token}\`);

    this.ws.onopen = () => {
      this.retryDelay = 1000; // reset backoff on success
    };

    this.ws.onmessage = (e) => {
      const event = JSON.parse(e.data) as NotificationEvent;
      this.listeners.forEach((fn) => fn(event));
    };

    this.ws.onclose = () => {
      setTimeout(() => {
        this.retryDelay = Math.min(this.retryDelay * 2, 30000);
        this.connect(token);
      }, this.retryDelay);
    };
  }

  subscribe(fn: (event: NotificationEvent) => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}

export const notificationSocket = new NotificationSocket();`,
        language: "typescript",
      },
      {
        heading: "In-app state: badge counts and the notification center",
        body: `The unread badge count needs to update instantly when a WebSocket event arrives, when a notification is tapped, and when the notification center is opened. This state should live in a global store (Zustand, Recoil, Redux) — not component state — so any component displaying the badge count re-renders automatically.

When a WebSocket event arrives, increment the unread count in the store and prepend the new notification to the list. When the user opens the notification center, mark all visible notifications as read via a mutation and reset the count. Use an optimistic update so the badge clears immediately — don't wait for the server to confirm.

The notification list itself should use cache-and-network fetch policy so it shows cached notifications instantly and updates silently. Combine this with real-time WebSocket events and users will rarely see a loading state.`,
      },
      {
        heading: "Layer 3: AppState reconciliation",
        body: `When iOS suspends an app, the WebSocket connection can go stale without emitting a close event. The app resumes, the socket appears connected, but no messages are delivered. This is the most subtle failure mode in foreground notification systems.

The fix: listen to React Native's AppState API. When the app transitions to 'active', fetch the current unread count from the server and replace the local count. This reconciliation request is cheap (a single integer) and runs within milliseconds of the app opening.

Also reconnect the WebSocket on every 'active' transition — don't trust that the existing connection is still healthy.`,
        code: `useEffect(() => {
  const subscription = AppState.addEventListener('change', (nextState) => {
    if (nextState === 'active') {
      // Reconcile count with server
      fetchUnreadCount().then(setUnreadCount);

      // Reconnect WebSocket in case it went stale
      notificationSocket.reconnect();
    }
  });

  return () => subscription.remove();
}, []);`,
        language: "typescript",
      },
      {
        heading: "Testing the system",
        body: `Test each layer in isolation. For push notifications, use Firebase's test message tool or the APNs sandbox to send notifications directly to a device token without going through your backend.

For the WebSocket layer, build a simple admin tool or use wscat to send mock notification payloads directly to the socket. Verify that the badge count updates, the notification appears in the list, and the WebSocket reconnects after you disable and re-enable wifi.

For AppState reconciliation, background the app, send a push notification, and bring the app back to foreground. The badge count should match the server's count exactly — not the WebSocket-derived count that missed the backgrounded event.

Edge cases to explicitly test: notification arrives while the user is on the notification center screen (should mark as read immediately), two notifications arrive within 100ms (count should be +2 not +1), and the user taps a push notification while the app is backgrounded (should navigate to the correct screen).`,
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
