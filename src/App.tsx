import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SystemType = {
  enhancement: number;
  transmutation: number;
  manipulation: number;
  emission: number;
  conjuration: number;
  specialization: number;
}

const questions = [
  {
    question: "When implementing the Prototype Pattern, which challenges and considerations are important? Select the incorrect option.",
    options: [
      {
        text: "Ensure deep copying of prototype objects to avoid unnecessary sharing and data contamination in the copied objects.",
        scores: {
          enhancement: 1,
          transmutation: 2,
          manipulation: 2,
          emission: 1,
          conjuration: -1,
          specialization: 0
        }
      },
      { text: "Ensure that all copied objects automatically update when the prototype object changes, to maintain a consistent state.",
        scores: {
          enhancement: 0,
          transmutation: 0,
          manipulation: 0,
          emission: 0,
          conjuration: 3,
          specialization: 3
        }
      },
      { text: "When designing the prototype cloning method, consider how to handle exceptions and errors during the copying process.",
        scores: {
          enhancement: 1,
          transmutation: 2,
          manipulation: 2,
          emission: 1,
          conjuration: -1,
          specialization: 0
        }
      },
      { text: "Evaluate whether copying objects could lead to performance issues, especially in large-scale copying operations, and consider performance optimization strategies.",
        scores: {
          enhancement: 1,
          transmutation: 0,
          manipulation: 0,
          emission: 2,
          conjuration: -1,
          specialization: 0
        }
      }
    ]
  },
  {
    question: "Which of the following code snippets best meets the Open-Closed Principle?",
    options: [
      {
        code: `
class Report {
    generateReport(type: string): void {
        if (type === "pdf") {
            this.generatePdfReport();
        } else if (type === "html") {
            this.generateHtmlReport();
        }
    }

    private generatePdfReport(): void {
        console.log("Generating PDF report...");
    }

    private generateHtmlReport(): void {
        console.log("Generating HTML report...");
    }
}
`,
        scores: {
          enhancement: 2,
          transmutation: 0,
          manipulation: 0,
          emission: 0,
          conjuration: 2,
          specialization: 0
        }
      },
      {
        code: `
class Report {
    generatePdfReport(): void {
        console.log("Generating PDF report...");
    }

    generateHtmlReport(): void {
        console.log("Generating HTML report...");
    }
}
`,
        scores: {
          enhancement: 0,
          transmutation: 1,
          manipulation: 1,
          emission: 3,
          conjuration: 0,
          specialization: 0
        }
      },
      {
        code: `
abstract class Report {
    abstract generateReport(): void;
}

class PdfReport extends Report {
    generateReport(): void {
        console.log("Generating PDF report...");
    }
}

class HtmlReport extends Report {
    generateReport(): void {
        console.log("Generating HTML report...");
    }
}
`,
        scores: {
          enhancement: 0,
          transmutation: 0,
          manipulation: 3,
          emission: 0,
          conjuration: 0,
          specialization: 3
        }
      },
      {
        text: "None of the above",
        scores: {
          enhancement: 1,
          transmutation: 1,
          manipulation: -1,
          emission: 1,
          conjuration: 1,
          specialization: 0
        }
      }
    ]
  },
  {
    question: "Which pattern can decouple the requestor and receiver by encapsulating the request as an object?",
    options: [
      { text: "Command Pattern",
        scores: {
          enhancement: 1,
          transmutation: 0,
          manipulation: 3,
          emission: 0,
          conjuration: 0,
          specialization: 3
        }
      },
      { text: "Strategy Pattern",
        scores: {
          enhancement: 0,
          transmutation: 1,
          manipulation: -2,
          emission: 2,
          conjuration: 1,
          specialization: 0
        }
      },
      { text: "Prototype Pattern",
        scores: {
          enhancement: 0,
          transmutation: 1,
          manipulation: -1,
          emission: 0,
          conjuration: -2,
          specialization: 0
        }
      },
      { text: "Decorator Pattern",
        scores: {
          enhancement: -2,
          transmutation: 1,
          manipulation: -1,
          emission: 0,
          conjuration: 0,
          specialization: 0
        }
      }
    ]
  },
  {
    question: "Which of the following patterns is used to hide the complexity of classes?",
    options: [
      { text: "Builder Pattern",
        scores: {
          enhancement: 0,
          transmutation: 0,
          manipulation: 1,
          emission: 2,
          conjuration: -2,
          specialization: 0
        }
      },
      { text: "Prototype Pattern",
        scores: {
          enhancement: 0,
          transmutation: 0,
          manipulation: 0,
          emission: 0,
          conjuration: -2,
          specialization: 0
        }
      },
      { text: "Facade Pattern",
        scores: {
          enhancement: 3,
          transmutation: 0,
          manipulation: 0,
          emission: 0,
          conjuration: 0,
          specialization: 3
        }
      },
      { text: "Command Pattern",
        scores: {
          enhancement: 1,
          transmutation: 1,
          manipulation: -2,
          emission: 1,
          conjuration: 1,
          specialization: 0
        }
      }
    ]
  },
  {
    question: "When designing a class, how would you handle dependencies?",
    options: [
      // 應盡可能使用組合
      { text: "Use inheritance as much as possible to reuse code.",
        scores: {
          enhancement: 2,
          transmutation: 2,
          manipulation: 1,
          emission: 0,
          conjuration: 2,
          specialization: 0
        }
      },
      { text: "Use dependency injection, following the Dependency Inversion Principle.",
        scores: {
          enhancement: 0,
          transmutation: 0,
          manipulation: 0,
          emission: 0,
          conjuration: 0,
          specialization: 3
        }
      },
      { text: "Minimize dependencies by using static methods.",
        scores: {
          enhancement: 1,
          transmutation: 2,
          manipulation: 0,
          emission: 3,
          conjuration: 0,
          specialization: 0
        }
      },
      { text: "Use the Factory Pattern to create dependency objects.",
        scores: {
          enhancement: 2,
          transmutation: 0,
          manipulation: 1,
          emission: 0,
          conjuration: 2,
          specialization: 0
        }
      }
    ]
  }
];

const results = [
  {
    type: "強化系",
    action: "你的水正在源源不絕溢出 ... ",
    description: "你在結構型設計模式方面表現出色。你善於組織和構建複雜的系統結構，能夠靈活運用適配器、橋接等模式來優化系統架構。"
  },
  {
    type: "變化系",
    action: "你的水看起來沒什麼變化？ 嚐了一口 ... 水的味道居然變了！",
    description: "你的答案顯示出多變性。你可能在不同情況下採用不同的方法，這種靈活性使你能夠適應各種開發場景。"
  },
  {
    type: "操作系",
    action: "在水中的葉片搖搖晃晃，但沒有風吹撫 ...",
    description: "你在行為型設計模式方面表現突出。你擅長處理對象間的交互和職責分配，能夠靈活運用觀察者、策略等模式來優化系統行為。"
  },
  {
    type: "放出系",
    action: "水的顏色很顯著的發生了變化！",
    description: "你偏好簡單直接的實現方式。雖然這可能犧牲了一些設計上的優雅，但你的方法通常能夠快速交付功能。"
  },
  {
    type: "具現化系",
    action: "水中突然出現的很多雜質 ...",
    description: "你在創造型設計模式方面表現優異。你善於處理對象的創建過程，能夠靈活運用工廠、建造者等模式來優化對象創建。"
  },
  {
    type: "特質系",
    action: "... 啊 從來沒有看過的變化呢 ...",
    description: "你在所有方面都表現出色，顯示了對 OOP 和 Design Pattern 的全面理解。你能夠在不同場景下選擇最合適的方法。"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [scores, setScores] = useState<SystemType>({
    enhancement: 0,
    transmutation: 0,
    manipulation: 0,
    emission: 0,
    conjuration: 0,
    specialization: 0
  });
  const [quizEnded, setQuizEnded] = useState(false);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const selectedScores = questions[currentQuestion].options[selectedOption].scores;
      const maxScore = Math.max(...Object.values(selectedScores));

      setScores(prevScores => {
        const newScores = { ...prevScores };
        Object.keys(selectedScores).forEach(key => {
          newScores[key as keyof SystemType] += selectedScores[key as keyof SystemType];
        });

        return newScores;
      });
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizEnded(true);
    }
  };

  const getResult = () => {
    console.log(scores.specialization, questions.length, 1321312)
    if (scores.specialization === questions.length * 3) {
      return results[5];
    }

    scores.specialization = 0;
    const maxScore = Math.max(...Object.values(scores));
    const resultType = Object.keys(scores).find(key => scores[key as keyof SystemType] === maxScore) as keyof SystemType;
    const resultIndex = ["enhancement", "transmutation", "manipulation", "emission", "conjuration", "specialization"].indexOf(resultType);

    return results[resultIndex];
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '20px' }}>Coder x Coder 水見式</h2>
      {!quizEnded ? (
        <>
          <p style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 'bold' }}>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start' }}>
                <input
                  type="radio"
                  name="option"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => handleOptionChange(index)}
                  style={{ marginRight: '10px', marginTop: '4px' }}
                />
                <div style={{ flex: 1 }}>
                  {option.code ? (
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                      {option.code.trim()}
                    </SyntaxHighlighter>
                  ) : (
                    <span>{option.text}</span>
                  )}
                </div>
              </label>
            </div>
          ))}
          <button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            style={{
              marginTop: '15px',
              padding: '10px 15px',
              backgroundColor: selectedOption === null ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: selectedOption === null ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {currentQuestion < questions.length - 1 ? "下一題" : "查看結果"}
          </button>
        </>
      ) : (
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '18px' }}>你的結果：</p>
          <p style={{ marginBottom: '10px', fontSize: '16px' }}>{getResult().action}</p>
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>你是 {getResult().type} 的開發者。</p>
          <p style={{ marginBottom: '10px', fontSize: '16px' }}>{getResult().description}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
