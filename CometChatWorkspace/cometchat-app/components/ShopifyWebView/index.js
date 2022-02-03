import React from 'react';
import { WebView } from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';

const ShopifyWebView = () => {
//   const INJECTED_JAVASCRIPT = `(function() {
//   window.ReactNativeWebView.postMessage(JSON.stringify(window.sessionStorage));
// })();`;

  return (
    <WebView
      // source={{ uri: 'https://go-source-dev.myshopify.com/?preview_theme_id=126458298565' }}
      source={{ uri: 'https://go-source-dev.myshopify.com' }}
      style={{marginTop: 40}}
      // javaScriptEnabled={true}
      // domStorageEnabled={true}
      // injectedJavaScript={INJECTED_JAVASCRIPT}
      // onMessage={e => console.log(e.nativeEvent.data)}
    />
  );
}

export default ShopifyWebView
