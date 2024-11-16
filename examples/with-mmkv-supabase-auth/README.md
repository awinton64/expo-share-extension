# MMKV Supabase Auth Example

This example demonstrates using Supabase authentication with MMKV for sharing data between the main app and share extension.
This example demonstrates that [`react-native-mmkv`](https://github.com/mrousavy/react-native-mmkv) can be used in `expo-share-extension` for persisting data that is shared between the main app and the share extension.

## Usage
    
1. Create a .env file with your Supabase credentials:

EXPO_PUBLIC_SUPABASE_URL=your-project-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

2. Run Prebuild

```bash
npm run prebuild
```

3. Start the app via Expo CLI

```bash
npm run ios
```

4. or only start the metro server and build via XCode

```bash
npm run start
```
