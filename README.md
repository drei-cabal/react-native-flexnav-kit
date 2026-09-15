# React Native FlexNav Kit

A personal practice project for learning core React Native patterns:
Flexbox layout, styling approaches (StyleSheet vs styled-components), and
React Navigation (stack, tab, and drawer navigators, including nesting them
together).

I built this to work through each pattern hands-on and have working examples
I can refer back to.

## 1. Setup (fresh Expo project)
```bash
npx create-expo-app my-app
cd my-app
```

## 2. Install dependencies
```bash
npx expo install react-native-safe-area-context react-native-screens
npx expo install react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer
npm install styled-components
npx expo install @expo/vector-icons
```
> Use `npx expo install` (not plain `npm install`) for native modules — it picks the version matched to your Expo SDK. Plain `npm install` is fine for JS-only packages like `styled-components` and `@react-navigation/*`.

## 3. File placement
Copy this folder's contents into your project root, matching:
```
App.js
babel.config.js
navigation/
  StackNav.js
  TabNav.js
  DrawerNav.js
  CustomDrawerContent.js
screens/
  HomeScreen.js
  DetailsScreen.js
  SettingsScreen.js
  ProfileScreen.js
  FlexboxPlayground.js
  StylesComparison.js
```

## 4. Run
```bash
npx expo start
```
Press `w` for web, or scan the QR with Expo Go.

---

## Troubleshooting notes (things I ran into while building this)

| Symptom | Fix |
|---|---|
| `Unable to resolve "react-native-gesture-handler"` | Run the expo install command above; restart with `npx expo start -c` (clears cache) |
| Drawer/gestures not responding | `import 'react-native-gesture-handler'` must be the **first line** of `App.js` |
| Reanimated crash on start | `react-native-reanimated/plugin` must be in `babel.config.js`, **listed last**, then restart with `-c` flag |
| styled-components styles not applying | Import from `'styled-components/native'`, NOT `'styled-components'` |
| Blank screen, no error | Check `NavigationContainer` wraps everything ONCE at the root only (never nest two `NavigationContainer`s) |
| `Cannot read property 'navigate' of undefined` | Component isn't being rendered as a `Screen` inside a Navigator — it lost the `navigation` prop |
| Tab icons not showing | Confirm `@expo/vector-icons` installed; icon name must be a valid Ionicons name (check exact spelling with `-outline` suffix) |
| Params undefined on Details screen | Use `route.params?.xxx` (optional chaining) — params are undefined on first mount before navigation |

## Notes to self on the core concepts

**Flexbox**
- Main axis = `justifyContent`, Cross axis = `alignItems`
- Default `flexDirection` in RN is `column` (different from CSS web default of `row`)
- `flex: 1` = grow to fill remaining space

**StyleSheet vs styled-components**
- `StyleSheet.create()`: plain objects, `style={[a, b]}` array syntax for conditionals
- `styled-components`: template literals, props drive dynamic values directly: `${props => ...}`

**Navigation nesting order**
```
NavigationContainer
  └── Drawer.Navigator
        └── Tab.Navigator (as a Drawer.Screen)
              └── Stack.Navigator (as a Tab.Screen)
                    └── actual screens
```

**Passing data between screens**
```js
navigation.navigate('ScreenName', { key: value })
// on receiving screen:
const { key } = route.params;
```
