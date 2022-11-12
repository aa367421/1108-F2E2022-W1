# The F2E 2022 W1


### **UI design from [EG](https://2022.thef2e.com/users/12061549261454740203)**
### **UI 設計稿來自 [EG](https://2022.thef2e.com/users/12061549261454740203)


## Work Description 作品說明


The F2E 2022 第一關的作品，感謝有這個機會讓我能用 GSAP 實作滾動視差相關的技術

也再次感謝 [EG](https://2022.thef2e.com/users/12061549261454740203) 大神的設計稿，第一眼就被吸引了，想說多看幾件作品再決定，最後還是回來到這份設計稿

在實作時實作到動物們衝線的那剎那也覺得自己衝線了（然而還有平板和手機的 RWD 在前方……）

一開始實作時，桌機端部分的動態主要採用 GSAP 的 timeline 物件達成，但實作到中途才發現 SrollTrigger 的 scrub 不該打開，導致 timeline 裡每個動態的比例都超小而且超難控管……

也因為這樣，桌機端的 sass 裡幾乎都直接把元素釘死，後來做平板、手機端時心一橫直接重開了一個檔案，後續再由 JS 在讀取時動態判斷、載入不同的 css 檔來處理

平板和手機端的動態做得就有比較讓自己滿意了，也更單純好寫好讀！（技術文件要看清楚的悲痛……）

不論如何，最後都還是獻出了肝臟完成了，明天的我值得一頓好吃的！


## Project Description 系統說明


專案部分沒有額外用 npm 等方式引入套件，套件和外部CSS都是直接以 CDN 方式引入


## Folder Description 資料夾說明

* resource : [EG](https://2022.thef2e.com/users/12061549261454740203) 提供的圖片、以及部分由自己拼接而成（ bg 裡的 bg_talking.png ）
* js : JavaScript 檔案們
* sass : sass 檔案們
* css : sass 編譯過後的 css 檔案們

* 檔案名稱：
  - entryDivertion : 負責剛進入畫面的階段，包括整體的初始化、 loading 頁面、游標圖示等
  - allForDesktop : 桌機端的 js / sass / css 們
  - allForNotDesktop : 平板、手機等 max-width <= 820px 裝置的 桌機端的 js / sass / css 們


from 2022/11/08 - 2022/11/12

