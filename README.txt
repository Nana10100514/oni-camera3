おにと、おさんぽ。3D AR版

【公開する方法】
index.html、style.css、app.js、modelsフォルダを同じ階層のままHTTPSサイト（GitHub Pagesなど）にアップロードしてください。ZIPを開くだけではARは動きません。model-viewerの読み込みにインターネット接続が必要です。

【使い方】
iPhone：Safariでサイトを開き「床に鬼を置く」。Quick LookのAR表示で床に配置します。
Android：Chromeでサイトを開き「床に鬼を置く」。ARCore対応端末でブラウザAR、またはScene Viewerを開きます。
明るい場所で模様のある床へカメラを向け、ゆっくり動かしてください。配置後、スマホで鬼を映しながら周りを歩くと横や後ろが見えます。紙やシールは不要です。

【今回の版の範囲】
・元の鬼の画像を参考に、丸い立体モデルを新しく制作しています。横・後ろの形は補完した試作です。
・GLBとUSDZに足踏みアニメーションを収録。再生・ループは端末のAR表示仕様に依存します。
・AR中は端末標準のUI、またはWebXRのUIです。前の2D撮影UIとは異なります。
・標準ARの撮影操作が使える場合はそちらを利用してください。動画はスマホの画面収録を利用できます。独自の写真・動画保存機能はこの3D版には入っていません。
・内カメラでの空間ARは対象外です。外カメラを使います。
・AR非対応端末では画面上の3D回転表示のみとなります。
・GLB構造、USDZの読み込みとアニメーションデータは確認済みです。iPhone・Android実機での床配置や撮影の動作は未確認です。

【ファイル】
models/oni.glb：ブラウザ・Android用
models/oni.usdz：iPhone用（アニメーション入り）

3D ARの公式参考資料
https://modelviewer.dev/examples/augmentedreality/
https://developer.apple.com/quick-look-gallery/
https://developers.google.com/ar/develop/webxr/model-viewer
