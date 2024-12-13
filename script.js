// 單字測驗資料
const allWordData = [
    { word: "a", options: ["一(個)", "二", "三", "四"], correct: 0 },
    { word: "A.M.", options: ["上午", "下午", "晚上", "凌晨"], correct: 0 },
    { word: "ability", options: ["能力", "智慧", "體力", "精神"], correct: 0 },
    { word: "able", options: ["能夠的", "困難的", "簡單的", "複雜的"], correct: 0 },
    { word: "about", options: ["關於", "遠離", "背離", "反對"], correct: 0 },
    { word: "above", options: ["上面", "下面", "裡面", "外面"], correct: 0 },
    { word: "abroad", options: ["在國外", "在國內", "在家裡", "在學校"], correct: 0 },
    { word: "absent", options: ["缺席的", "出席的", "準時的", "遲到的"], correct: 0 },
    { word: "accept", options: ["接受", "拒絕", "放棄", "忽視"], correct: 0 },
    { word: "accident", options: ["意外事故", "計畫", "約會", "活動"], correct: 0 },
    { word: "achieve", options: ["達到", "放棄", "失敗", "停止"], correct: 0 },
    { word: "across", options: ["橫過", "直行", "迴轉", "停止"], correct: 0 },
    { word: "act", options: ["表演", "睡覺", "吃飯", "跑步"], correct: 0 },
    { word: "action", options: ["行動", "停止", "休息", "等待"], correct: 0 },
    { word: "active", options: ["活躍的", "懶惰的", "疲倦的", "安靜的"], correct: 0 },
    { word: "activity", options: ["活動", "睡眠", "休息", "發呆"], correct: 0 },
    { word: "actor", options: ["演員", "醫生", "老師", "警察"], correct: 0 },
    { word: "actress", options: ["女演員", "女醫生", "女老師", "女警察"], correct: 0 },
    { word: "actually", options: ["實際上", "可能", "也許", "大概"], correct: 0 },
    { word: "add", options: ["加上", "減去", "乘以", "除以"], correct: 0 },
    { word: "addition", options: ["加法", "減法", "乘法", "除法"], correct: 0 },
    { word: "address", options: ["地址", "電話", "姓名", "年齡"], correct: 0 },
    { word: "admire", options: ["欽佩", "討厭", "忽視", "批評"], correct: 0 },
    { word: "admit", options: ["承認", "否認", "懷疑", "拒絕"], correct: 0 },
    { word: "adopt", options: ["領養", "遺棄", "忽視", "傷害"], correct: 0 },
    { word: "adult", options: ["成年人", "小孩", "嬰兒", "青少年"], correct: 0 },
    { word: "advance", options: ["前進", "後退", "停止", "迴轉"], correct: 0 },
    { word: "advantage", options: ["優點", "缺點", "問題", "困難"], correct: 0 },
    { word: "adventure", options: ["冒險", "安全", "無聊", "平淡"], correct: 0 },
    { word: "advertisement", options: ["廣告", "新聞", "小說", "報告"], correct: 0 },
    { word: "advice", options: ["建議", "命令", "威脅", "懲罰"], correct: 0 },
    { word: "advise", options: ["建議", "命令", "威脅", "懲罰"], correct: 0 },
    { word: "affair", options: ["事務", "玩具", "遊戲", "休閒"], correct: 0 },
    { word: "affect", options: ["影響", "忽視", "放棄", "逃避"], correct: 0 },
    { word: "afraid", options: ["害怕的", "勇敢的", "冷靜的", "開心的"], correct: 0 },
    { word: "after", options: ["之後", "之前", "現在", "永遠"], correct: 0 },
    { word: "afternoon", options: ["下午", "上午", "晚上", "凌晨"], correct: 0 },
    { word: "again", options: ["再一次", "永不", "從不", "最後"], correct: 0 },
    { word: "against", options: ["反對", "支持", "幫助", "讚同"], correct: 0 },
    { word: "age", options: ["年齡", "身高", "體重", "速度"], correct: 0 },
    { word: "ago", options: ["以前", "現在", "將來", "永遠"], correct: 0 },
    { word: "agree", options: ["同意", "反對", "拒絕", "否認"], correct: 0 },
    { word: "ahead", options: ["在前面", "在後面", "在中間", "在旁邊"], correct: 0 },
    { word: "aid", options: ["幫助", "阻礙", "破壞", "傷害"], correct: 0 },
    { word: "aim", options: ["目標", "失敗", "放棄", "錯誤"], correct: 0 },
    { word: "air", options: ["空氣", "水", "土", "火"], correct: 0 },
    { word: "air conditioner", options: ["冷氣機", "電視", "冰箱", "洗衣機"], correct: 0 },
    { word: "aircraft", options: ["飛機", "汽車", "船", "腳踏車"], correct: 0 },
    { word: "airline", options: ["航空公司", "銀行", "餐廳", "學校"], correct: 0 },
    { word: "airplane", options: ["飛機", "汽車", "船", "腳踏車"], correct: 0 },
    { word: "airport", options: ["機場", "車站", "碼頭", "公園"], correct: 0 },
    { word: "alarm", options: ["鬧鐘", "手錶", "收音機", "電視"], correct: 0 },
    { word: "album", options: ["相簿", "書本", "筆記本", "日記"], correct: 0 },
    { word: "alike", options: ["相似的", "不同的", "獨特的", "特別的"], correct: 0 },
    { word: "alive", options: ["活著的", "死去的", "生病的", "受傷的"], correct: 0 },
    { word: "all", options: ["全部", "部分", "一些", "少許"], correct: 0 },
    { word: "allow", options: ["允許", "禁止", "阻止", "拒絕"], correct: 0 },
    { word: "almost", options: ["幾乎", "完全", "絕對", "永遠"], correct: 0 },
    { word: "alone", options: ["單獨的", "群體的", "熱鬧的", "擁擠的"], correct: 0 },
    { word: "along", options: ["沿著", "遠離", "背離", "反對"], correct: 0 },
    { word: "aloud", options: ["大聲地", "安靜地", "輕聲地", "無聲地"], correct: 0 },
    { word: "alphabet", options: ["字母表", "數字表", "圖表", "表格"], correct: 0 },
    { word: "already", options: ["已經", "還沒", "將要", "永遠不"], correct: 0 },
    { word: "also", options: ["也", "只有", "除了", "反而"], correct: 0 },
    { word: "although", options: ["雖然", "因為", "所以", "但是"], correct: 0 },
    { word: "altogether", options: ["全部", "部分", "一些", "少許"], correct: 0 },
    { word: "always", options: ["總是", "從不", "很少", "偶爾"], correct: 0 },
    { word: "ambulance", options: ["救護車", "警車", "消防車", "垃圾車"], correct: 0 },
    { word: "America", options: ["美國", "英國", "法國", "德國"], correct: 0 },
    { word: "American", options: ["美國的", "英國的", "法國的", "德國的"], correct: 0 },
    { word: "among", options: ["之中", "之外", "之上", "之下"], correct: 0 },
    { word: "amount", options: ["數量", "品質", "種類", "形狀"], correct: 0 },
    { word: "ancient", options: ["古代的", "現代的", "未來的", "當代的"], correct: 0 },
    { word: "and", options: ["和", "或", "但", "所以"], correct: 0 },
    { word: "angel", options: ["天使", "魔鬼", "人類", "動物"], correct: 0 },
    { word: "anger", options: ["憤怒", "快樂", "平靜", "悲傷"], correct: 0 },
    { word: "angry", options: ["生氣的", "開心的", "平靜的", "傷心的"], correct: 0 },
    { word: "animal", options: ["動物", "植物", "礦物", "物品"], correct: 0 },
    { word: "ankle", options: ["腳踝", "手腕", "手肘", "膝蓋"], correct: 0 },
    { word: "another", options: ["另一個", "相同的", "這個", "那個"], correct: 0 },
    { word: "answer", options: ["答案", "問題", "疑問", "猜測"], correct: 0 },
    { word: "ant", options: ["螞蟻", "蜜蜂", "蒼蠅", "蚊子"], correct: 0 },
    { word: "any", options: ["任何", "所有", "沒有", "特定"], correct: 0 },
    { word: "anybody", options: ["任何人", "沒有人", "所有人", "特定人"], correct: 0 },
    { word: "anymore", options: ["不再", "仍然", "永遠", "從來"], correct: 0 },
    { word: "anyone", options: ["任何人", "沒有人", "所有人", "特定人"], correct: 0 },
    { word: "anything", options: ["任何事", "沒事", "所有事", "特定事"], correct: 0 },
    { word: "anytime", options: ["任何時候", "永遠不", "特定時間", "固定時間"], correct: 0 }
];

// 從所有單字中隨機選擇10個
function getRandomWords(count) {
    const shuffled = [...allWordData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

let wordData = [];
let currentWord = 0;
let score = 0;
let timer;
let timeLeft;
let answerHistory = [];

const quizContainer = document.getElementById('quiz-container');
const wordElement = document.getElementById('current-word');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const speakBtn = document.getElementById('speak-btn');
const feedbackElement = document.getElementById('feedback');
const progressElement = document.getElementById('progress');

// 開始測驗
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', loadNextWord);
speakBtn.addEventListener('click', speakWord);

function startQuiz() {
    startBtn.style.display = 'none';
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    score = 0;
    currentWord = 0;
    answerHistory = [];
    // 隨機選擇10個單字
    wordData = getRandomWords(10);
    loadWord();
}

function loadWord() {
    if (currentWord >= wordData.length) {
        showResults();
        return;
    }

    const currentWordData = wordData[currentWord];
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = '';
    feedbackElement.className = '';
    
    // 顯示進度
    progressElement.textContent = `第 ${currentWord + 1} 題 / 共 ${wordData.length} 題`;
    
    // 顯示單字
    wordElement.textContent = currentWordData.word;
    
    // 創建選項按鈕
    currentWordData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    // 重置並開始計時器
    startTimer();
}

function startTimer() {
    timeLeft = 15;
    updateTimerDisplay();
    
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerElement.textContent = `剩餘時間：${timeLeft}秒`;
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentWordData = wordData[currentWord];
    const options = document.querySelectorAll('.option-btn');
    
    // 禁用所有選項
    options.forEach(option => option.disabled = true);
    
    // 顯示正確和錯誤答案
    options[currentWordData.correct].classList.add('correct');
    
    let isCorrect = selectedIndex === currentWordData.correct;
    
    if (isCorrect) {
        score += 10;
        feedbackElement.innerHTML = '<div class="feedback-icon">✓</div>答對了！<br>得分：+10分';
        feedbackElement.className = 'correct';
    } else {
        options[selectedIndex].classList.add('wrong');
        feedbackElement.innerHTML = '<div class="feedback-icon">✗</div>答錯了！<br>正確答案是：' + currentWordData.options[currentWordData.correct];
        feedbackElement.className = 'wrong';
    }
    
    // 記錄答題歷史
    answerHistory.push({
        word: currentWordData.word,
        userAnswer: currentWordData.options[selectedIndex],
        correctAnswer: currentWordData.options[currentWordData.correct],
        isCorrect: isCorrect,
        timeSpent: 15 - timeLeft
    });

    // 2秒後自動進入下一題
    setTimeout(() => {
        loadNextWord();
    }, 2000);
}

function handleTimeout() {
    const options = document.querySelectorAll('.option-btn');
    const currentWordData = wordData[currentWord];
    
    options.forEach(option => option.disabled = true);
    options[currentWordData.correct].classList.add('correct');
    feedbackElement.innerHTML = '<div class="feedback-icon">⏰</div>時間到！<br>正確答案是：' + currentWordData.options[currentWordData.correct];
    feedbackElement.className = 'wrong';

    // 記錄答題歷史
    answerHistory.push({
        word: currentWordData.word,
        userAnswer: '未作答',
        correctAnswer: currentWordData.options[currentWordData.correct],
        isCorrect: false,
        timeSpent: 15
    });

    // 2秒後自動進入下一題
    setTimeout(() => {
        loadNextWord();
    }, 2000);
}

function loadNextWord() {
    currentWord++;
    loadWord();
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    nextBtn.style.display = 'none';
    
    const scorePercentage = (score / (wordData.length * 10)) * 100;
    
    let historyHTML = '<h3>作答記錄：</h3><div class="answer-history">';
    answerHistory.forEach((record, index) => {
        const icon = record.isCorrect ? '✓' : (record.userAnswer === '未作答' ? '⏰' : '✗');
        const statusClass = record.isCorrect ? 'correct' : 'wrong';
        historyHTML += `
            <div class="history-item ${statusClass}">
                <div class="history-number">${index + 1}</div>
                <div class="history-content">
                    <div class="history-word">${record.word}</div>
                    <div class="history-details">
                        ${record.userAnswer === '未作答' 
                            ? `<span class="timeout">時間到！未作答</span>` 
                            : `你的答案：${record.userAnswer}`}
                        ${!record.isCorrect ? `<br>正確答案：${record.correctAnswer}` : ''}
                        <br>作答時間：${record.timeSpent}秒
                    </div>
                </div>
                <div class="history-icon">${icon}</div>
            </div>
        `;
    });
    historyHTML += '</div>';

    resultContainer.innerHTML = `
        <h2>測驗結束！</h2>
        <div class="final-score">總分：${score}分 (${scorePercentage}%)</div>
        ${historyHTML}
        <button onclick="startQuiz()" class="restart-btn">重新開始</button>
    `;
}

function speakWord() {
    const currentWordData = wordData[currentWord];
    const utterance = new SpeechSynthesisUtterance(currentWordData.word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}
