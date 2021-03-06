# ▼npmモジュールを選定する際に参考にすると良い指標
npmモジュールを選定する際に参考にすると良い指標は以下の通り

## DL数
多い方が良い。  
npmの公式ページのモジュール詳細ページで確認可能  
（↓npm公式ページ）  
https://www.npmjs.com/
（↓モジュール詳細ページ　例：chokidar）  
https://www.npmjs.com/package/chokidar
  
## バージョンは1以上か
1以上の方がバグが少ないので1以上の方が良い。  
npmの公式ページのモジュール詳細ページで確認可能  
  
## OSSライセンス
組み込んだソースコードを配布する予定のある人などは要確認。  
npmの公式ページのモジュール詳細ページで確認可能  
  
↓公式ページ  
<img width="1238" alt="npmjscom" src="https://user-images.githubusercontent.com/54488985/101721548-8ea78180-3aeb-11eb-8085-476e779c8527.png">

## GitHubのスター数
スター数が多い方が良い。  
gitHubリポジトリはnpm公式ページのモジュール詳細ページで確認可能  
(例：chokidar)  
https://github.com/paulmillr/chokidar
スター数はgitHubページの右上で確認可能  
  
## メンテされているか
最終更新日が最近の方が良い。  
gitHubのcommit履歴を見ることで確認可能  
https://github.com/paulmillr/chokidar
  
↓github  
<img width="1277" alt="githubスター数" src="https://user-images.githubusercontent.com/54488985/101721487-6f105900-3aeb-11eb-96cf-26ef3d4c9fec.png">


# ▼(補足)OSSライセンス
OSS・・・open source software  
だれでも複製・配布・改良できるソフトウェアのこと。  
ただし、複製・配布・改良の範囲は「OSSライセンス」によって制限されている。  
ライセンスの種類は大きく分けて３つある。  
  
- コピーレフト
  - 複製・再頒布可能、改変可能、改変部分のソース公開が必要、他のコードと組み合わせた場合他のコードのソース公開が必要
  - 代表的なものにFree Software Foundation（FSF）によって作成されたGNU General Public License（GPL)がある
- 準コピーレフト
  - 複製・再頒布可能、改変可能、改変部分のソース公開が必要、他のコードと組み合わせた場合他のコードのソース公開は**不要**
  - 代表的なものにMozilla Foundationによって作成された Mozilla Public License（MPL)がある
- 非コピーレフト
  - 複製・再頒布可能、改変可能、改変部分のソース公開は**不要**、他のコードと組み合わせた場合他のコードのソース公開は**不要**
  - 代表的なものにUniversity of California, Berkele（UC Berkeley）が作成したBSD Licenseがある
  
  
<img width="712" alt="OSSライセンス種類" src="https://user-images.githubusercontent.com/54488985/101721610-b565b800-3aeb-11eb-8e1e-0a27addba8e2.png">
  
  
よく使われているのはMIFなど
(参考:https://www.sbbit.jp/article/cont1/34811)
  


# ▼指標を確認するのに便利なwebサイト
## npm trends
https://www.npmtrends.com/
  
ダウンロード数を時系列でグラフで可視化してくれる。githubスターや最終更新日、作成日などの確認もできる。  
複数のモジュールを一度に比較することができるのが便利。  
  
また、類似のモジュールを見つけるのにも役立つ。  


# ▼目当てのモジュールの見つけ方（例）
「npmのライセンスを確認できるモジュールがあったら使いたいな〜」と思い立つ  
google検索で『npm ライセンス モジュール』と検索  
一番上に出てきた記事で『grunt-license-report』というモジュールを発見  

npm trendsで 『grunt-license-report』を検索実行  
おすすめのところに色々出てくるので全て追加していく（今回追加したのは「grunt-license-finder」「license-checker」「check-license」「license-check」）  
圧倒的にlicense-checkerがダウンロードされていることがわかる  
![圧倒的license-checker](https://user-images.githubusercontent.com/54488985/101721727-fa89ea00-3aeb-11eb-9554-4f50d5bd5ce0.png)
スター数、最新更新日を見ても申し分ない感じ  
  
npm公式ページに飛んでlicense-checkerを調べる  
バージョンも25で良い感じ  
  
これに決定！！  
