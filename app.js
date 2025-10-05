// Thai Tone Recognition Driller - Simplified Version
class ThaiToneDriller {
  constructor() {
    // Educational Thai vocabulary - all words mixed together
    this.educationalWords = {
      กิน: { meaning: "eat", tone: "mid", category: "verb" },
      ดู: { meaning: "look/watch", tone: "mid", category: "verb" },
      ไป: { meaning: "go", tone: "mid", category: "verb" },
      มา: { meaning: "come", tone: "mid", category: "verb" },
      อ่าน: { meaning: "read", tone: "low", category: "verb" },
      เขียน: { meaning: "write", tone: "rising", category: "verb" },
      พูด: { meaning: "speak", tone: "falling", category: "verb" },
      ฟัง: { meaning: "listen", tone: "mid", category: "verb" },
      ทำ: { meaning: "do/make", tone: "mid", category: "verb" },
      เรียน: { meaning: "study/learn", tone: "mid", category: "verb" },
      บ้าน: { meaning: "house", tone: "falling", category: "noun" },
      โรงเรียน: { meaning: "school", tone: "mid", category: "noun" },
      คน: { meaning: "person", tone: "mid", category: "noun" },
      เด็ก: { meaning: "child", tone: "low", category: "noun" },
      หนังสือ: { meaning: "book", tone: "rising", category: "noun" },
      อาหาร: { meaning: "food", tone: "mid", category: "noun" },
      น้ำ: { meaning: "water", tone: "high", category: "noun" },
      วัน: { meaning: "day", tone: "mid", category: "noun" },
      เวลา: { meaning: "time", tone: "mid", category: "noun" },
      ที่: { meaning: "place", tone: "falling", category: "noun" },
      ดี: { meaning: "good", tone: "mid", category: "adjective" },
      เลว: { meaning: "bad", tone: "mid", category: "adjective" },
      ใหญ่: { meaning: "big", tone: "low", category: "adjective" },
      เล็ก: { meaning: "small", tone: "high", category: "adjective" },
      สูง: { meaning: "tall/high", tone: "rising", category: "adjective" },
      เตี้ย: { meaning: "short", tone: "low", category: "adjective" },
      ร้อน: { meaning: "hot", tone: "high", category: "adjective" },
      เย็น: { meaning: "cool", tone: "mid", category: "adjective" },
      หนาว: { meaning: "cold", tone: "rising", category: "adjective" },
      อร่อย: { meaning: "delicious", tone: "low", category: "adjective" },
      แดง: { meaning: "red", tone: "mid", category: "adjective" },
      เขียว: { meaning: "green", tone: "rising", category: "adjective" },
      น้ำเงิน: { meaning: "blue", tone: "high", category: "adjective" },
      เหลือง: { meaning: "yellow", tone: "rising", category: "adjective" },
      ขาว: { meaning: "white", tone: "rising", category: "adjective" },
      ดำ: { meaning: "black", tone: "mid", category: "adjective" },
      ม่วง: { meaning: "purple", tone: "falling", category: "adjective" },
      ส้ม: { meaning: "orange", tone: "falling", category: "adjective" },
      หนึ่ง: { meaning: "one", tone: "low", category: "number" },
      สอง: { meaning: "two", tone: "rising", category: "number" },
      สาม: { meaning: "three", tone: "rising", category: "number" },
      สี่: { meaning: "four", tone: "low", category: "number" },
      ห้า: { meaning: "five", tone: "falling", category: "number" },
      หก: { meaning: "six", tone: "low", category: "number" },
      เจ็ด: { meaning: "seven", tone: "low", category: "number" },
      แปด: { meaning: "eight", tone: "low", category: "number" },
      เก้า: { meaning: "nine", tone: "falling", category: "number" },
      สิบ: { meaning: "ten", tone: "low", category: "number" },
      พ่อ: { meaning: "father", tone: "falling", category: "family" },
      แม่: { meaning: "mother", tone: "falling", category: "family" },
      ลูก: { meaning: "child", tone: "falling", category: "family" },
      พี่: { meaning: "older sibling", tone: "falling", category: "family" },
      น้อง: { meaning: "younger sibling", tone: "high", category: "family" },
      ปู่: {
        meaning: "grandfather (paternal)",
        tone: "low",
        category: "family",
      },
      ย่า: {
        meaning: "grandmother (maternal)",
        tone: "falling",
        category: "family",
      },
      ลุง: { meaning: "uncle", tone: "mid", category: "family" },
      ป้า: { meaning: "aunt", tone: "falling", category: "family" },
      หมา: { meaning: "dog", tone: "rising", category: "animal" },
      แมว: { meaning: "cat", tone: "mid", category: "animal" },
      ไก่: { meaning: "chicken", tone: "low", category: "animal" },
      วัว: { meaning: "cow", tone: "mid", category: "animal" },
      ช้าง: { meaning: "elephant", tone: "high", category: "animal" },
      ปลา: { meaning: "fish", tone: "mid", category: "animal" },
      หมู: { meaning: "pig", tone: "rising", category: "animal" },
      กบ: { meaning: "frog", tone: "low", category: "animal" },
      นก: { meaning: "bird", tone: "high", category: "animal" },
      งู: { meaning: "snake", tone: "mid", category: "animal" },
      เสือ: { meaning: "tiger", tone: "rising", category: "animal" },
      หิน: { meaning: "stone", tone: "rising", category: "noun" },
      ไฟ: { meaning: "fire", tone: "mid", category: "noun" },
      ใบ: { meaning: "leaf", tone: "mid", category: "noun" },
      ต้นไม้: { meaning: "tree", tone: "falling", category: "noun" },
      ดอกไม้: { meaning: "flower", tone: "low", category: "noun" },
      ฟ้า: { meaning: "sky", tone: "high", category: "noun" },
      ดิน: { meaning: "soil", tone: "mid", category: "noun" },
      ลม: { meaning: "wind", tone: "mid", category: "noun" },
      ฝน: { meaning: "rain", tone: "rising", category: "noun" },
      แดด: { meaning: "sunlight", tone: "low", category: "noun" },
      เช้า: { meaning: "morning", tone: "high", category: "noun" },
      บ่าย: { meaning: "afternoon", tone: "low", category: "noun" },
      คืน: { meaning: "night", tone: "mid", category: "noun" },
      ปี: { meaning: "year", tone: "mid", category: "noun" },
      เดือน: { meaning: "month", tone: "mid", category: "noun" },
      สัปดาห์: { meaning: "week", tone: "low", category: "noun" },
      รถ: { meaning: "car", tone: "high", category: "noun" },
      เรือ: { meaning: "boat", tone: "mid", category: "noun" },
      รูป: { meaning: "picture", tone: "falling", category: "noun" },
      เสื้อ: { meaning: "shirt", tone: "rising", category: "noun" },
      กางเกง: { meaning: "pants", tone: "mid", category: "noun" },
    };

    this.tones = ["mid", "low", "falling", "high", "rising"];

    this.toneRules = {
      mid: "Mid tone: Middle/low class consonants in live syllables without tone marks",
      low: "Low tone: Middle/high class consonants with ไม้เอก (อ่) or in dead syllables",
      falling:
        "Falling tone: With ไม้โท (อ้) or low class consonants in dead long syllables",
      high: "High tone: Low class consonants with ไม้โท (อ้) or in dead short syllables",
      rising:
        "Rising tone: High class consonants in live syllables or with ไม้จัตวา (อ๋)",
    };

    this.currentWord = null;
    this.score = { correct: 0, total: 0, streak: 0 };
    this.isAnswered = false;

    this.initializeApp();
  }

  initializeApp() {
    this.setupEventListeners();
    this.loadNewWord();
  }

  setupEventListeners() {
    // Tone button clicks
    document.querySelectorAll(".tone-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (!this.isAnswered) {
          this.handleToneSelection(e.target.closest(".tone-btn").dataset.tone);
        }
      });
    });

    // Next word button
    document.getElementById("nextWord").addEventListener("click", () => {
      this.loadNewWord();
    });

    // Toggle tone rules
    document.getElementById("toggleRules").addEventListener("click", () => {
      this.toggleToneRules();
    });

    const toggleTableBtn = document.getElementById("toggleTable");
    if (toggleTableBtn) {
      toggleTableBtn.addEventListener("click", () => {
        this.toggleToneTable();
      });
    }

    // Keyboard shortcuts (1-5 for tones)
    document.addEventListener("keydown", (e) => {
      if (this.isAnswered) return;

      const toneMap = {
        1: "mid",
        2: "low",
        3: "falling",
        4: "high",
        5: "rising",
      };

      if (toneMap[e.key]) {
        this.handleToneSelection(toneMap[e.key]);
      } else if (e.key === "Enter" || e.key === " ") {
        if (this.isAnswered) {
          this.loadNewWord();
        }
      }
    });
  }

  loadNewWord() {
    // Get all word keys and select randomly
    const wordKeys = Object.keys(this.educationalWords);
    const randomKey = wordKeys[Math.floor(Math.random() * wordKeys.length)];

    this.currentWord = {
      word: randomKey,
      ...this.educationalWords[randomKey],
    };

    this.displayWord();
    this.resetButtons();
    this.hideFeedback();
    this.isAnswered = false;
  }

  displayWord() {
    // Display Thai word (NO romanization)
    document.getElementById("currentWord").textContent = this.currentWord.word;

    // Display meaning only
    document.getElementById(
      "wordMeaning"
    ).textContent = `Educational vocabulary: ${this.currentWord.meaning}`;
  }

  handleToneSelection(selectedTone) {
    if (this.isAnswered) return;

    const isCorrect = selectedTone === this.currentWord.tone;

    // Update score
    this.score.total++;
    if (isCorrect) {
      this.score.correct++;
      this.score.streak++;
    } else {
      this.score.streak = 0;
    }

    // Show visual feedback on buttons
    this.showButtonFeedback(selectedTone, this.currentWord.tone);

    // Show explanation
    this.showFeedback(isCorrect, selectedTone, this.currentWord.tone);

    // Update score display
    this.updateScoreDisplay();

    this.isAnswered = true;

    // Auto-advance after 3 seconds
    setTimeout(() => {
      if (this.isAnswered) {
        this.loadNewWord();
      }
    }, 3000);
  }

  showButtonFeedback(selectedTone, correctTone) {
    document.querySelectorAll(".tone-btn").forEach((btn) => {
      btn.classList.remove("correct", "incorrect");
      btn.classList.add("disabled");

      if (btn.dataset.tone === correctTone) {
        btn.classList.add("correct");
      } else if (
        btn.dataset.tone === selectedTone &&
        selectedTone !== correctTone
      ) {
        btn.classList.add("incorrect");
      }
    });
  }

  showFeedback(isCorrect, selectedTone, correctTone) {
    const feedbackPanel = this.getFeedbackPanel();

    const feedbackClass = isCorrect ? "feedback-correct" : "feedback-incorrect";
    const feedbackIcon = isCorrect ? "✓" : "✗";
    const feedbackTitle = isCorrect ? "Correct!" : "Incorrect";

    let explanationText = `The correct tone is <span class="correct-tone">${correctTone}</span>.`;

    if (!isCorrect) {
      explanationText += ` You selected ${selectedTone}.`;
    }

    explanationText += `<br><br>${this.toneRules[correctTone]}`;

    feedbackPanel.innerHTML = `
            <div class="feedback-header">
                <span class="feedback-icon ${feedbackClass}">${feedbackIcon}</span>
                <h3 class="feedback-title ${feedbackClass}">${feedbackTitle}</h3>
            </div>
            <div class="feedback-content">
                <p>${explanationText}</p>
            </div>
        `;

    feedbackPanel.classList.add("show");
  }

  getFeedbackPanel() {
    let panel = document.getElementById("feedbackPanel");
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "feedbackPanel";
      panel.className = "feedback-panel";
      document.querySelector(".tone-selection").appendChild(panel);
    }
    return panel;
  }

  hideFeedback() {
    const panel = document.getElementById("feedbackPanel");
    if (panel) {
      panel.classList.remove("show");
    }
  }

  resetButtons() {
    document.querySelectorAll(".tone-btn").forEach((btn) => {
      btn.classList.remove("correct", "incorrect", "disabled");
    });
  }

  updateScoreDisplay() {
    const accuracy =
      this.score.total > 0
        ? Math.round((this.score.correct / this.score.total) * 100)
        : 0;

    document.getElementById(
      "score"
    ).textContent = `${this.score.correct}/${this.score.total}`;
    document.getElementById("accuracy").textContent = `${accuracy}%`;
    document.getElementById("streak").textContent = this.score.streak;
  }

  toggleToneRules() {
    const rulesPanel = this.getToneRulesPanel();
    rulesPanel.classList.toggle("show");

    const toggleBtn = document.getElementById("toggleRules");
    const isShowing = rulesPanel.classList.contains("show");
    toggleBtn.textContent = isShowing
      ? "📁 Hide Tone Rules"
      : "📚 Show Tone Rules";
  }

  toggleToneTable() {
    const tablePanel = document.getElementById("toneTablePanel");
    const toggleBtn = document.getElementById("toggleTable");
    if (!tablePanel || !toggleBtn) return;

    const isVisible = tablePanel.style.display === "block";

    if (isVisible) {
      tablePanel.style.display = "none";
      toggleBtn.textContent = "📋 Show Table";
    } else {
      tablePanel.style.display = "block";
      toggleBtn.textContent = "📋 Hide Table";
    }
  }

  getToneRulesPanel() {
    let panel = document.getElementById("toneRulesPanel");
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "toneRulesPanel";
      panel.className = "tone-rules-reference";

      let rulesHTML = '<h3 class="rules-title">Thai Tone Rules Reference</h3>';

      Object.entries(this.toneRules).forEach(([tone, rule]) => {
        rulesHTML += `
                    <div class="rule-item">
                        <div class="rule-tone">${
                          tone.charAt(0).toUpperCase() + tone.slice(1)
                        } Tone</div>
                        <div class="rule-description">${rule}</div>
                    </div>
                `;
      });

      panel.innerHTML = rulesHTML;

      // Insert after the toggle button
      const toggleContainer = document.querySelector(".tone-rules-toggle");
      toggleContainer.parentNode.insertBefore(
        panel,
        toggleContainer.nextSibling
      );
    }
    return panel;
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ThaiToneDriller();
});
