window.PORTFOLIO_CURRENT = {
  "date": "2026-10-13",
  "phone": "+90 537 408 10 74",
  "projects": {
    "chefinpocket": {
      "id": "chefinpocket",
      "icon": "🍳",
      "title": {
        "en": "ChefInPocket",
        "tr": "ChefInPocket"
      },
      "company": {
        "tr": "Sabancı Üniversitesi · CS310 Takım Projesi",
        "en": "Sabancı University · CS310 Team Project"
      },
      "period": {
        "tr": "Bahar 2026",
        "en": "Spring 2026"
      },
      "location": {
        "tr": "İstanbul, Türkiye",
        "en": "Istanbul, Turkey"
      },
      "description": {
        "en": "A recipe app with filtering, account access and step-by-step cooking.",
        "tr": "Filtreleme ve adım adım pişirme sunan tarif uygulaması."
      },
      "tech": [
        "Flutter",
        "Node.js",
        "Express",
        "MongoDB",
        "Microservices",
        "Docker",
        "Nginx"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "ChefInPocket, kullanıcının tarif arama anından pişirme sürecinin son adımına kadar eşlik eden uçtan uca bir yemek asistanı olarak tasarlandı. Projede tarif keşfi, hızlı erişim kısayolları, Chef AI destekli soru-cevap, kişiselleştirilebilir malzeme değişimleri, alışveriş listesi ve rehberli pişirme akışlarını aynı ürün mimarisi içinde bir araya getirdik.",
          "en": "ChefInPocket was designed as an end-to-end cooking companion that supports the user from recipe discovery to the final cooking step. The product brings together recipe search, quick-access shortcuts, Chef AI Q&A, customizable ingredient swaps, grocery planning, and guided cooking inside one cohesive product architecture."
        }
      },
      "responsibilities": {
        "tr": [
          "Flutter tabanlı kullanıcı yolculuğunu tarif keşfi, Chef AI, malzeme özelleştirme, grocery list ve guided cooking ekranları arasında tutarlı bir akışa dönüştürdüm.",
          "Auth, recipe, pantry, community, assistant ve content servislerini API gateway üzerinden çalışan modüler backend yapısında bir araya getirdim.",
          "Root-level Dockerfile ve Nginx kurulumu ile Flutter web build’ini ve backend servislerini Hugging Face Docker Space üzerinde çalışabilecek şekilde paketledim."
        ],
        "en": [
          "Turned the Flutter experience into a coherent product flow across recipe discovery, Chef AI, ingredient customization, grocery planning, and guided cooking screens.",
          "Integrated the auth, recipe, pantry, community, assistant, and content services into a modular backend architecture behind a single API gateway.",
          "Packaged the Flutter web build and backend services with a root-level Dockerfile and Nginx setup so the project can run on a Hugging Face Docker Space."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "İstemci",
            "en": "Client"
          },
          "value": "Flutter Mobile/Web"
        },
        {
          "label": {
            "tr": "Backend",
            "en": "Backend"
          },
          "value": "6 Services + Gateway"
        },
        {
          "label": {
            "tr": "Dağıtım",
            "en": "Deployment"
          },
          "value": "Docker + Nginx"
        },
        {
          "label": {
            "tr": "Kapsam",
            "en": "Scope"
          },
          "value": "AI + Grocery + Cooking"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Ana Sayfa ve Tarif Keşfi",
            "en": "Home and Recipe Discovery"
          },
          "desc": {
            "tr": "Ana ekranda arama, mutfak kategorileri, günün önerisi ve hızlı erişim kartlarını tek bakışta sunarak kullanıcının uygulamaya hızlı giriş yapmasını hedefledik. Böylece keşif akışı ürünün geri kalan özelliklerine doğal bir başlangıç noktası sağlıyor.",
            "en": "The home screen gives users a clear entry point with search, cuisine shortcuts, a featured recipe, and quick-access cards. This makes recipe discovery feel immediate and sets up the rest of the product flow naturally."
          },
          "src": "images/chefinpocket1.png"
        },
        {
          "title": {
            "tr": "Chef AI Yardımcısı",
            "en": "Chef AI Assistant"
          },
          "desc": {
            "tr": "Chef AI ekranı, tarif bağlamı içinde kullanıcıdan gelen sorulara yanıt verecek şekilde kurgulandı. Malzeme değişimleri, pişirme ipuçları ve zamanlama soruları için hafif ama ürün içine gömülü bir yardımcı deneyim oluşturduk.",
            "en": "The Chef AI screen is designed to answer user questions within the recipe context. It provides a lightweight but deeply integrated assistant experience for substitutions, cooking tips, and timing questions."
          },
          "src": "images/chefinpocket2.png"
        },
        {
          "title": {
            "tr": "Malzeme Özelleştirme",
            "en": "Ingredient Customization"
          },
          "desc": {
            "tr": "Kullanıcı, pişirmeye başlamadan önce tarifteki malzemeler için önerilen değişimleri seçebiliyor. Bu akış, kişiselleştirme ve diyet/tercih uyarlamalarını ürünün merkezine taşıyarak tarifleri daha esnek hale getiriyor.",
            "en": "Users can choose suggested ingredient swaps before they start cooking. This flow brings personalization and preference-aware recipe adaptation into the core experience."
          },
          "src": "images/chefinpocket3.png"
        },
        {
          "title": {
            "tr": "Alışveriş Listesi",
            "en": "Grocery Planning"
          },
          "desc": {
            "tr": "Eksik malzemeleri pişirme öncesi net bir kontrol listesine dönüştürerek hazırlık sürecini daha uygulanabilir hale getirdik. Grocery ekranı, tarif seçimi ile gerçek hayat alışveriş davranışı arasında pratik bir köprü kuruyor.",
            "en": "Missing ingredients are turned into a simple checklist so pre-cooking preparation becomes actionable. The grocery screen creates a practical bridge between recipe selection and real-world shopping."
          },
          "src": "images/chefinpocket4.png"
        },
        {
          "title": {
            "tr": "Adım Adım Pişirme",
            "en": "Guided Cooking Steps"
          },
          "desc": {
            "tr": "Pişirme ekranı, kullanıcıyı numaralandırılmış adımlarla tarif boyunca yönlendiriyor ve karmaşıklığı azaltıyor. Bu yapı, özellikle ilk kez denenen tariflerde daha güvenli ve takip edilebilir bir deneyim sağlıyor.",
            "en": "The cooking screen guides the user through numbered steps and reduces cognitive load during the recipe flow. This makes the experience easier to follow, especially for recipes the user is trying for the first time."
          },
          "src": "images/chefinpocket5.png"
        }
      ],
      "url": "https://github.com/mesely/ChefInPocket",
      "concise": {
        "features": [
          "Flutter client with six Node.js services behind an API gateway.",
          "Docker/Nginx deployment and unit/widget tests for filtering and login."
        ],
        "result": "",
        "features_tr": [
          "API gateway arkasındaki altı Node.js servisiyle Flutter istemcisi.",
          "Docker/Nginx dağıtımı; filtreleme ve giriş için unit/widget testleri."
        ],
        "result_tr": ""
      }
    },
    "beme": {
      "id": "beme",
      "icon": "🧬",
      "title": {
        "en": "AutoBEME",
        "tr": "AutoBEME"
      },
      "company": {
        "tr": "Açık Kaynak / Kişisel Proje",
        "en": "Open-source / Personal Project"
      },
      "period": {
        "tr": "Nis 2026 – Devam Ediyor",
        "en": "Apr 2026 – Present"
      },
      "location": {
        "tr": "Uzaktan",
        "en": "Remote"
      },
      "description": {
        "en": "A scikit-learn-compatible ensemble for imbalanced classification.",
        "tr": "Dengesiz sınıflandırma için scikit-learn uyumlu ensemble modeli."
      },
      "tech": [
        "Python",
        "scikit-learn",
        "Multi-label Classification",
        "Prediction Markets",
        "Mathematical Modeling",
        "Classifier Chains"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Paper’daki ana fikir, klasik precision/recall ödünleşimini statik bir karar sınırı olmaktan çıkarıp ekonomik teşviklerle kontrol edilen bir market simülasyonuna çevirmek. Her ajan farklı veri alt kümelerinde eğitilir, doğru ve özgüvenli ayrıştığı sürece sermaye kazanır; final tahmin ise en çok sermaye biriktiren ajanların daha fazla oy gücü aldığı market konsensüsünden üretilir.",
          "en": "The paper turns the usual precision/recall trade-off from a static decision boundary into a market simulation controlled by economic incentives. Each agent is trained on a different data subset, earns capital when it is confidently and correctly different from consensus, and the final prediction comes from a market consensus where richer agents receive more voting power."
        }
      },
      "responsibilities": {
        "tr": [
          "Çok etiketli veriyi ajan marketine taşıyan matematiksel modeli kurdum: ajan sermayesi, risk katsayısı, aktif sınıf seti ve sektör izolasyonu birlikte çalışıyor.",
          "Market fiyatını sermaye ağırlıklı logit ortalamasıyla tanımladım; temperature parametresiyle konsensüsün ne kadar keskin veya yumuşak olacağını kontrol ettim.",
          "Unified P&L formülüyle ajanı sadece doğru tahmin ettiği için değil, ground truth’a doğru yönde marketten ayrıştığı için ödüllendirdim.",
          "Vanguard, Sovereign ve Apocalypse modlarını farklı threshold, temperature, leverage ve model aileleriyle tasarladım; Apocalypse tarafında Classifier Chain ve asimetrik ceza kullandım."
        ],
        "en": [
          "Built the mathematical model that streams multi-label data into an agent market: capital, risk, active class sets, and sector isolation work together.",
          "Defined market pricing through capital-weighted logit averaging; the temperature parameter controls whether consensus becomes sharp or soft.",
          "Designed the Unified P&L rule so agents are rewarded not only for being correct, but for being correctly positioned away from market consensus.",
          "Designed Vanguard, Sovereign, and Apocalypse modes with different thresholds, temperatures, leverage values, and model families; Apocalypse uses Classifier Chains and asymmetric penalties."
        ]
      },
      "kpis": [
        {
          "label": {
            "en": "Benchmark regimes won",
            "tr": "Benchmark regimes won"
          },
          "value": "2 of 3"
        },
        {
          "label": {
            "en": "Recorded text Macro-F1",
            "tr": "Recorded text Macro-F1"
          },
          "value": "0.826 → 0.864"
        }
      ],
      "details": [
        {
          "title": {
            "tr": "Mimari Akış",
            "en": "Architecture Flow"
          },
          "lead": {
            "tr": "AutoBEME’nin akışı bir finans piyasası analojisi üzerine kuruluyor: sınıflandırıcılar ajan, olasılıklar fiyat teklifi, sermaye oy gücü, P&L ise öğrenme/evolüsyon sinyali gibi davranıyor.",
            "en": "AutoBEME is built around a financial-market analogy: classifiers are agents, probabilities are bids, capital is voting power, and P&L becomes the learning/evolution signal."
          },
          "bullets": {
            "tr": [
              "Veri çok etiketli bir eğitim dizisi olarak alınır ve gerekirse Auto-Caster ile 1D binary hedefler iki kolonlu forma çevrilir.",
              "N ajan farklı bootstrap alt kümelerinde eğitilir; böylece ajanlar aynı problemi farklı örnek dağılımlarından öğrenir.",
              "Her sınıf için nadirliği ölçen Auto-Bounty katsayısı hesaplanır ve az görülen sınıfları doğru yakalayan ajanlar daha fazla ödüllendirilir.",
              "Tahmin anında ajan olasılıkları logit uzayına taşınır, sermaye ağırlıklarıyla birleştirilir ve sigmoid ile tekrar olasılık uzayına döndürülür.",
              "Unified P&L ajan sermayesini günceller; belirli periyotlarda güçlü ajanların stratejileri zayıf ajanlara kopyalanarak piyasa evrim geçirir."
            ],
            "en": [
              "Data enters as a multi-label training sequence; when needed, Auto-Caster converts 1D binary targets into a two-column representation.",
              "N agents are trained on different bootstrap subsets, so each agent learns the same problem from a different sample distribution.",
              "Auto-Bounty measures class rarity, making correct rare-class calls more valuable.",
              "During prediction, agent probabilities are moved into logit space, combined by capital weights, and mapped back into probability space with a sigmoid.",
              "Unified P&L updates agent capital; at scheduled intervals, strong strategies are cloned into weak agents so the market evolves."
            ]
          },
          "formulas": [
            {
              "label": {
                "tr": "Eğitim Dizisi",
                "en": "Training Sequence"
              },
              "tex": "\\[\\mathcal{D}=\\{(x_t,\\mathbf{y}_t)\\}_{t=1}^{T},\\quad x_t\\in\\mathbb{R}^{d},\\quad \\mathbf{y}_t\\in\\{0,1\\}^{K}\\]"
            },
            {
              "label": {
                "tr": "Ajan Tanımı",
                "en": "Agent State"
              },
              "tex": "\\[a_i=\\bigl(C_i(t),\\ r_i,\\ \\mathcal{M}_i,\\ S_i,\\ \\mathcal{C}_i\\bigr),\\quad C_i(0)=100\\]"
            }
          ]
        },
        {
          "title": {
            "tr": "Ajan Kurulumu ve Bootstrap Çeşitliliği",
            "en": "Agent Initialization and Bootstrap Diversity"
          },
          "lead": {
            "tr": "Amaç tek bir güçlü modelden çok, farklı önyargılara sahip bir ajan piyasası üretmek. Bu yüzden ajanlar aynı eğitim setinin farklı alt örneklerinden başlatılıyor.",
            "en": "The goal is not a single strong model, but a market of agents with different inductive biases. Agents therefore start from different subsets of the same training data."
          },
          "paragraphs": {
            "tr": [
              "Vanguard, Sovereign ve Custom modlarında ajanlar stratified split ile farklı eğitim alt kümelerine dağıtılır. Apocalypse modunda ise her ajan eğitim verisinin yüzde 85’ini replacement olmadan örnekler; bu yapı Classifier Chain ajanlarının birbirinden yeterince farklı karar zincirleri kurmasını sağlar.",
              "Ajanlar COMMODITY ve FINANCE olarak iki sektöre ayrılır. Sektör izolasyonu, tek bir kötü stratejinin tüm sınıfları domine etmesini engeller; her sektör kendi aktif sınıf kümesini takip eder."
            ],
            "en": [
              "In Vanguard, Sovereign, and Custom modes, agents are assigned different training subsets through stratified splitting. In Apocalypse mode, each agent samples 85% of the training data without replacement, which helps Classifier Chain agents build sufficiently different decision chains.",
              "Agents are split into COMMODITY and FINANCE sectors. Sector isolation prevents one weak strategy from dominating every class; each sector tracks its own active class set."
            ]
          },
          "formulas": [
            {
              "label": {
                "tr": "Stratified Eğitim Alt Kümesi",
                "en": "Stratified Training Subset"
              },
              "tex": "\\[\\mathcal{D}^{\\text{train}}_i=\\text{StratifiedSplit}(\\mathcal{D},\\ \\text{test\\_size}=0.30,\\ \\text{seed}=i)\\]"
            },
            {
              "label": {
                "tr": "Apocalypse Bootstrap",
                "en": "Apocalypse Bootstrap"
              },
              "tex": "\\[\\mathcal{I}_i=\\text{Sample}(\\{1,\\dots,n\\},\\ \\lfloor0.85n\\rfloor,\\ \\text{replace}=\\text{False})\\]"
            },
            {
              "label": {
                "tr": "Sektör Sınıf Setleri",
                "en": "Sector Class Sets"
              },
              "compact": true,
              "tex": "\\[\\scriptstyle \\mathcal{C}_i=\\begin{cases}\\{k:0\\le k<K,\\ k\\bmod 2=1\\},&S_i=\\mathrm{COMMODITY}\\\\\\{k:0\\le k<K,\\ k\\bmod 2=0\\},&S_i=\\mathrm{FINANCE}\\end{cases}\\]"
            }
          ]
        },
        {
          "title": {
            "tr": "Auto-Bounty: Sınıf Dengesizliği Teşviki",
            "en": "Auto-Bounty: Class-Imbalance Incentive"
          },
          "lead": {
            "tr": "Nadir sınıflar klasik loss fonksiyonlarında kolayca ezilebilir. Auto-Bounty, pozitif sınıf frekansına göre otomatik bir ödül çarpanı üretir.",
            "en": "Rare classes are easily overwhelmed in standard loss functions. Auto-Bounty computes an automatic reward multiplier from positive-label frequency."
          },
          "paragraphs": {
            "tr": [
              "Her sınıf için pozitif örnek sayısı hesaplanır. En sık görülen sınıf referans alınır; daha nadir sınıfların bounty değeri logaritmik olarak yükselir. Böylece model, nadir ama önemli pozitifleri yakalayan ajanlara daha fazla sermaye aktarır."
            ],
            "en": [
              "The number of positive examples is computed for each class. The most frequent class is used as the reference, and rarer classes receive a logarithmically larger bounty. Agents that catch rare positives therefore earn more capital."
            ]
          },
          "formulas": [
            {
              "label": {
                "tr": "Pozitif Sayım",
                "en": "Positive Count"
              },
              "tex": "\\[n_c=\\sum_{t=1}^{T}y_{t,c}\\]"
            },
            {
              "label": {
                "tr": "Auto-Bounty",
                "en": "Auto-Bounty"
              },
              "tex": "\\[\\beta_c=1+\\ln\\!\\left(\\frac{\\max_k n_k}{\\max(n_c,1)}\\right)\\]"
            }
          ]
        },
        {
          "title": {
            "tr": "Market Fiyat Keşfi",
            "en": "Market Price Discovery"
          },
          "lead": {
            "tr": "Final tahmin tek bir modelden gelmez. Her sınıf için, o sınıfı takip eden ajanların sermaye ağırlıklı logit teklifleri market fiyatına dönüştürülür.",
            "en": "The final prediction does not come from one model. For each class, agents tracking that class contribute capital-weighted logit bids that become the market price."
          },
          "paragraphs": {
            "tr": [
              "Olasılıklar önce 0.01 ile 0.99 arasında kırpılır; bu, logit uzayında sonsuz değerleri önler. Ardından her ajan, o sınıf için mevcut sermayesi oranında ağırlık alır.",
              "Temperature T konsensüsün sertliğini belirler. Küçük T zengin ajanların etkisini keskinleştirip precision tarafını güçlendirir; büyük T oyları yumuşatıp recall odaklı davranışı destekler."
            ],
            "en": [
              "Probabilities are clipped to the 0.01-0.99 interval to avoid logit singularities. Each agent then receives a class-specific weight proportional to its current capital.",
              "Temperature T controls consensus softness. Smaller T sharpens the influence of wealthy agents and favors precision; larger T softens the vote and supports recall-oriented behavior."
            ]
          },
          "formulas": [
            {
              "label": {
                "tr": "Sermaye Ağırlığı",
                "en": "Capital Weight"
              },
              "tex": "\\[w_{i,c}=\\frac{C_i(t)}{\\sum_{j\\in I_c}C_j(t)},\\quad I_c=\\{i:c\\in\\mathcal{C}_i\\}\\]"
            },
            {
              "label": {
                "tr": "Temperature-Scaled Market Fiyatı",
                "en": "Temperature-Scaled Market Price"
              },
              "tex": "\\[\\mathcal{P}_c=\\sigma\\!\\left(\\frac{1}{T}\\sum_{i\\in I_c}w_{i,c}\\,\\operatorname{logit}(p_{i,c})\\right)\\]"
            },
            {
              "label": {
                "tr": "Karar Eşiği",
                "en": "Decision Threshold"
              },
              "tex": "\\[\\hat{y}_c=\\mathbf{1}[\\mathcal{P}_c>\\tau]\\]"
            }
          ]
        },
        {
          "title": {
            "tr": "Unified P&L: Sermaye Güncellemesi",
            "en": "Unified P&L: Capital Update"
          },
          "lead": {
            "tr": "P&L formülünün önemli yanı, ajanı sadece doğru tahmin ettiği için ödüllendirmemesi. Ajan, market konsensüsünden doğru yönde ayrıştığında para kazanır.",
            "en": "The key idea in the P&L formula is that agents are not rewarded merely for being correct. They earn money when they diverge from market consensus in the correct direction."
          },
          "paragraphs": {
            "tr": [
              "Base term, ground truth ile market fiyatı arasındaki hata yönünü; ajan olasılığı ile market fiyatı arasındaki ayrışma yönüyle çarpar. Bu değer pozitifse ajan marketten daha iyi konumlanmıştır.",
              "Confidence multiplier, 0.5’ten uzak tahminleri daha güçlü ödüllendirir veya cezalandırır. FutureValue ise sermayesi düşmüş ama doğru sinyal üreten ajanlara recovery alanı açar."
            ],
            "en": [
              "The base term multiplies the error direction between ground truth and market price by the divergence direction between the agent probability and market price. If the value is positive, the agent was better positioned than the market.",
              "The confidence multiplier amplifies predictions far from 0.5. FutureValue gives low-capital agents a recovery mechanism when they produce correct signals."
            ]
          },
          "formulas": [
            {
              "label": {
                "tr": "Base Term",
                "en": "Base Term"
              },
              "tex": "\\[B_{i,c}=(y_{t,c}-\\mathcal{P}_c)(p_{i,c}-\\mathcal{P}_c)r_iL\\beta_c\\]"
            },
            {
              "label": {
                "tr": "Confidence",
                "en": "Confidence"
              },
              "tex": "\\[\\Gamma_{i,c}=|p_{i,c}-0.5|\\times2\\]"
            },
            {
              "label": {
                "tr": "FutureValue",
                "en": "FutureValue"
              },
              "tex": "\\[\\Phi_i(t)=\\begin{cases}1+\\dfrac{100}{C_i(t)+1},&C_i(t)<100\\\\1,&C_i(t)\\ge100\\end{cases}\\]"
            },
            {
              "label": {
                "tr": "Birleşik P&L",
                "en": "Combined P&L"
              },
              "tex": "\\[\\delta_{i,c}=B_{i,c}(1+\\Gamma_{i,c})\\Phi_i(t)\\]"
            },
            {
              "label": {
                "tr": "Balance Update",
                "en": "Balance Update"
              },
              "tex": "\\[C_i(t+1)=\\max\\!\\left(1.0,\\ C_i(t)+\\sum_{c\\in\\mathcal{C}_i}\\delta_{i,c}\\right)\\]"
            }
          ]
        },
        {
          "title": {
            "tr": "Evrimsel Rebalance",
            "en": "Evolutionary Rebalancing"
          },
          "lead": {
            "tr": "Market yalnızca ağırlık güncellemez; belirli aralıklarla ajan popülasyonunu da yeniden düzenler. Bu kısım ensemble’ı statik oylamadan çıkarıp evrimsel bir strateji havuzuna dönüştürür.",
            "en": "The market does not only update weights; it periodically reorganizes the agent population. This turns the ensemble from static voting into an evolutionary strategy pool."
          },
          "paragraphs": {
            "tr": [
              "İlk 250 adım warm-up olarak ele alınır ve daha sık rebalance yapılır. Sonrasında kullanıcı tarafından belirlenen R periyodu kullanılır.",
              "Her sektörde en yüksek sermayeli ajan parent, en düşük sermayeli ajan child olur. Parent modelinin deep copy’si child’a aktarılır; parent sermayesinin yüzde 10’u transfer edilerek child yeniden piyasaya sokulur."
            ],
            "en": [
              "The first 250 steps are treated as warm-up and rebalance more frequently. After that, the user-configurable R period is used.",
              "Within each sector, the richest agent becomes the parent and the poorest agent becomes the child. The parent model is deep-copied into the child, and 10% of the parent capital is transferred to relaunch the child."
            ]
          },
          "formulas": [
            {
              "label": {
                "tr": "Rebalance Periyodu",
                "en": "Rebalance Period"
              },
              "tex": "\\[\\Delta_{\\text{rebalance}}=\\begin{cases}20,&t<250\\\\R,&t\\ge250\\end{cases}\\]"
            },
            {
              "label": {
                "tr": "Parent / Child Seçimi",
                "en": "Parent / Child Selection"
              },
              "tex": "\\[a^*=\\arg\\max_{a_i:S_i=S}C_i(t),\\quad a_- = \\arg\\min_{a_i:S_i=S}C_i(t)\\]"
            },
            {
              "label": {
                "tr": "Sermaye Transferi",
                "en": "Capital Transfer"
              },
              "tex": "\\[\\Delta_{\\text{transfer}}=0.1C_{a^*}(t),\\quad C_{a_-}(t)\\leftarrow\\max(100,\\Delta_{\\text{transfer}})\\]"
            }
          ]
        },
        {
          "title": {
            "tr": "Operational Modes",
            "en": "Operational Modes"
          },
          "lead": {
            "tr": "AutoBEME aynı matematiksel çekirdeği farklı ekonomik ayarlarla üç davranış moduna çevirir: recall odaklı Vanguard, precision odaklı Sovereign ve F1/denge odaklı Apocalypse.",
            "en": "AutoBEME turns the same mathematical core into three behavioral modes through different economic settings: recall-oriented Vanguard, precision-oriented Sovereign, and F1/balance-oriented Apocalypse."
          },
          "table": {
            "columns": {
              "tr": [
                "Mode",
                "Amaç",
                "τ",
                "T",
                "L",
                "Base Model"
              ],
              "en": [
                "Mode",
                "Goal",
                "τ",
                "T",
                "L",
                "Base Model"
              ]
            },
            "rows": [
              [
                "recall / Vanguard",
                {
                  "tr": "False negative maliyetini düşürmek, yüksek recall",
                  "en": "Reduce false negatives, maximize recall"
                },
                "0.30",
                "1.05",
                "35.0",
                "Logistic Regression, balanced"
              ],
              [
                "precision / Sovereign",
                {
                  "tr": "False positive maliyetini düşürmek, yüksek precision",
                  "en": "Reduce false positives, maximize precision"
                },
                "0.65",
                "0.70",
                "20.0",
                "Calibrated LinearSVC, balanced"
              ],
              [
                "balanced / Apocalypse",
                {
                  "tr": "F1 dengesini kırmak, label dependency yakalamak",
                  "en": "Break the F1 ceiling and capture label dependency"
                },
                "0.45",
                "1.05",
                "30.0",
                "Classifier Chains, SVM+LR, W={0:1, 1:4}"
              ],
              [
                "custom",
                {
                  "tr": "Kullanıcı modelini aynı market API’sine bağlamak",
                  "en": "Attach a user model to the same market API"
                },
                "0.45",
                "1.00",
                "25.0",
                "User-provided estimator"
              ]
            ]
          }
        },
        {
          "title": {
            "tr": "Apocalypse Architecture",
            "en": "Apocalypse Architecture"
          },
          "lead": {
            "tr": "Apocalypse modu klasik independent multi-output yaklaşımı yerine Classifier Chain kullanır. Böylece model, bir label tahminini sonraki label’ların girdisine dönüştürerek etiket bağımlılıklarını öğrenir.",
            "en": "Apocalypse replaces independent multi-output prediction with Classifier Chains. A predicted label becomes part of the input for later labels, letting the model learn inter-label dependencies."
          },
          "paragraphs": {
            "tr": [
              "Her zincirde label sırası rastgele permütasyonla belirlenir. Zincir linkleri SVM ve Logistic Regression çekirdekleriyle kurulur; pozitif sınıf için 4 kat ceza ağırlığı false negative maliyetini yükseltir.",
              "Bu mod market simülasyonunun en başarılı pratik varyantı oldu: karmaşık sparse text ve SONAR signal verisinde LinearSVC baseline F1 tavanını geçti."
            ],
            "en": [
              "Each chain uses a random label permutation. Chain links use SVM and Logistic Regression cores; a 4x positive-class penalty increases the cost of false negatives.",
              "This became the strongest practical variant of the market: on complex sparse text and SONAR signal data, it surpassed the LinearSVC baseline F1 ceiling."
            ]
          },
          "formulas": [
            {
              "label": {
                "tr": "Classifier Chain",
                "en": "Classifier Chain"
              },
              "tex": "\\[P(y_{\\pi(k)}\\mid x)=\\mathcal{F}_{\\pi(k)}\\bigl(x,\\hat{y}_{\\pi(1)},\\dots,\\hat{y}_{\\pi(k-1)}\\bigr)\\]"
            },
            {
              "label": {
                "tr": "Asimetrik Ceza",
                "en": "Asymmetric Penalty"
              },
              "tex": "\\[W=\\{0:1,\\ 1:4\\}\\]"
            }
          ]
        },
        {
          "title": {
            "tr": "Deney Sonuçları ve Yorum",
            "en": "Experimental Results and Interpretation"
          },
          "lead": {
            "tr": "Benchmark üç farklı veri rejimini kapsıyor: sparse çok etiketli text, küçük dense signal ve dense binary spam sınıflandırması. Sonuçlar AutoBEME’nin karmaşık dağılımlarda güçlü olduğunu, basit dense problemlerde ise ekstra bias ekleyebildiğini gösteriyor.",
            "en": "The benchmark covers three regimes: sparse multi-label text, small dense signal data, and dense binary spam classification. Results show AutoBEME is strongest on complex distributions, while simple dense problems may not need the extra inductive bias."
          },
          "table": {
            "columns": {
              "tr": [
                "Dataset",
                "Baseline",
                "Vanguard",
                "Sovereign",
                "Apocalypse",
                "Yorum"
              ],
              "en": [
                "Dataset",
                "Baseline",
                "Vanguard",
                "Sovereign",
                "Apocalypse",
                "Interpretation"
              ]
            },
            "rows": [
              [
                "Memory Text (K=10)",
                "SVM F1=0.8923",
                "F1=0.8650, Recall=0.9491",
                "F1=0.8863, Precision=0.9182",
                "F1=0.9035",
                {
                  "tr": "Apocalypse 0.90 F1 eşiğini geçti; Vanguard recall, Sovereign precision hedefini doğruladı.",
                  "en": "Apocalypse broke the 0.90 F1 barrier; Vanguard validated recall targeting and Sovereign validated precision targeting."
                }
              ],
              [
                "SONAR (K=2)",
                "SVM F1=0.8263",
                "F1=0.8182",
                "F1=0.8000",
                "F1/Recall/Precision=0.8636",
                {
                  "tr": "Apocalypse üç metriğin tamamında en iyi sonucu verdi; chain mimarisi signal yapısını yakaladı.",
                  "en": "Apocalypse led all three metrics; the chain architecture captured useful signal structure."
                }
              ],
              [
                "SPAMBASE (K=2)",
                "SVM F1=0.9241",
                "F1=0.9123",
                "F1=0.9140, Precision=0.9459",
                "F1=0.8978, Precision=0.9506",
                {
                  "tr": "Linear SVM zaten near-optimal; market/chain yapısı bu basit dense problemde over-regularization etkisi yarattı.",
                  "en": "Linear SVM was already near-optimal; the market/chain structure over-regularized this simpler dense problem."
                }
              ]
            ]
          }
        },
        {
          "title": {
            "tr": "API Katmanı",
            "en": "API Layer"
          },
          "lead": {
            "tr": "Quick Start görseli bu yüzden kapak olarak bırakıldı: projenin ürün değeri, tüm bu matematiksel market simülasyonunu tek bir fit/predict çağrısına indirgemesi.",
            "en": "This is why the Quick Start remains the cover visual: the product value is compressing the full mathematical market simulation into one fit/predict workflow."
          },
          "formulas": [
            {
              "label": {
                "tr": "Auto-Caster",
                "en": "Auto-Caster"
              },
              "tex": "\\[y^{\\text{1D}}\\in\\{0,1\\}^{n}\\longrightarrow \\mathbf{Y}^{\\text{2D}}=[1-y^{\\text{1D}},\\ y^{\\text{1D}}]\\in\\{0,1\\}^{n\\times2}\\]"
            }
          ],
          "bullets": {
            "tr": [
              "Kullanıcı AutoBEME(mode='recall'|'precision'|'balanced') seçerek aynı API ile farklı precision/recall davranışları elde eder.",
              "Vanguard, Sovereign ve Custom market.predict yolunu; Apocalypse ise raw chain probabilities üzerinden capital-weighted _hack_predict yolunu kullanır.",
              "API tasarımında amaç araştırma prototipini scikit-learn ekosisteminde hızlı denenebilir bir sınıfa dönüştürmekti."
            ],
            "en": [
              "Users select AutoBEME(mode='recall'|'precision'|'balanced') to obtain different precision/recall behavior through the same API.",
              "Vanguard, Sovereign, and Custom use the market.predict path; Apocalypse uses capital-weighted _hack_predict over raw chain probabilities.",
              "The API design turns the research prototype into a scikit-learn compatible class that can be tested quickly."
            ]
          }
        },
        {
          "title": {
            "en": "Reading the results",
            "tr": "Reading the results"
          },
          "paragraphs": {
            "en": [
              "Different public project materials describe different datasets and metrics. The 0.826 to 0.864 Macro-F1 comparison is the recorded signal-rich benchmark used in the CV; the TBMM frozen-transfer comparison is a separate experiment. Neither establishes that this ensemble wins on all data or against fully fine-tuned BERT models."
            ],
            "tr": [
              "Different public project materials describe different datasets and metrics. The 0.826 to 0.864 Macro-F1 comparison is the recorded signal-rich benchmark used in the CV; the TBMM frozen-transfer comparison is a separate experiment. Neither establishes that this ensemble wins on all data or against fully fine-tuned BERT models."
            ]
          }
        }
      ],
      "images": [
        {
          "src": "images/beme2.png",
          "title": {
            "tr": "Quick Start: Tüm Market Matematiğini Tek API’ye İndirme",
            "en": "Quick Start: Compressing the Full Market Math into One API"
          },
          "desc": {
            "tr": "Diğer görseller yerine bu kapak bırakıldı; çünkü proje görselden çok matematiksel mimariyle anlatılıyor. Bu küçük Quick Start çağrısının altında bootstrap ajanları, Auto-Bounty, market price discovery, Unified P&L, Apocalypse Classifier Chains ve evrimsel rebalance akışı çalışıyor.",
            "en": "This is the only retained visual because the project is better explained through its mathematical architecture. Under this small Quick Start call, the system runs bootstrap agents, Auto-Bounty, market price discovery, Unified P&L, Apocalypse Classifier Chains, and evolutionary rebalancing."
          }
        }
      ],
      "url": "https://github.com/mesely/beme",
      "concise": {
        "features": [
          "Bootstrap classifiers act as agents with virtual capital.",
          "Capital-weighted logits, class-frequency rewards and periodic rebalancing determine the ensemble vote."
        ],
        "result": "Recorded text benchmark: Macro-F1 0.826 → 0.864; best result in two of three data regimes.",
        "features_tr": [
          "Bootstrap sınıflandırıcıları sanal sermayeli ajanlar olarak çalışır.",
          "Sermaye ağırlıklı logitler, sınıf sıklığı ödülleri ve yeniden dengeleme ensemble oyunu belirler."
        ],
        "result_tr": "Kayıtlı metin benchmark’ında Macro-F1: 0,826 → 0,864; üç veri rejiminin ikisinde en iyi sonuç."
      }
    },
    "baykar": {
      "id": "baykar",
      "icon": "🎯",
      "title": {
        "en": "Baykar — Recommendation System",
        "tr": "Baykar — Recommendation System"
      },
      "company": {
        "tr": "Baykar",
        "en": "Baykar"
      },
      "period": {
        "tr": "Ağu – Eyl 2025",
        "en": "Aug – Sep 2025"
      },
      "location": {
        "tr": "İstanbul, Türkiye",
        "en": "Istanbul, Turkey"
      },
      "description": {
        "en": "A social-media recommendation pipeline built during my AI internship.",
        "tr": "AI stajımda geliştirdiğim sosyal medya öneri sistemi."
      },
      "tech": [
        "PyTorch",
        "TurkishBERTweet",
        "Two-Tower",
        "Wide & Deep",
        "Embeddings",
        "Recommendation Systems"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Hedef; farklı platformlarda kullanıcı–içerik etkileşimlerinden (beğeni/yorum/takip vb.) öğrenerek önce hızlı bir aday içerik havuzu üretmek (retrieval), ardından kullanıcı bağlamını ve ek sinyalleri kullanarak en iyi sıralamayı üretmekti (re-ranking). İki aşamalı yaklaşım sayesinde hem ölçeklenebilirlik hem de kişiselleştirme kalitesi birlikte optimize edildi.",
          "en": "Goal was to (1) quickly retrieve a strong candidate set from multi-platform user–content interactions and (2) re-rank candidates with richer context signals. A two-stage setup improves scalability while keeping personalization quality high."
        }
      },
      "responsibilities": {
        "tr": [
          "Instagram, Twitter ve Next Sosyal veri setlerinde gerçek + sentetik etkileşimlerle uçtan uca öneri pipeline’ı kurdum.",
          "TurkishBERTweet ile kullanıcı/öğe embedding’leri çıkarıp, Two-Tower retrieval + Wide&Deep re-ranking mimarisini uyguladım."
        ],
        "en": [
          "Designed an end-to-end recommendation pipeline using real + synthetic interactions across multiple platforms.",
          "Extracted user/item embeddings with TurkishBERTweet and implemented Two-Tower retrieval + Wide&Deep re-ranking."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Mimari",
            "en": "Architecture"
          },
          "value": "Two-Stage RecSys"
        },
        {
          "label": {
            "tr": "Modelleme",
            "en": "Modeling"
          },
          "value": "Two-Tower + W&D"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Modelleme ve Akış",
            "en": "Modeling & Flow"
          },
          "desc": {
            "tr": "Retrieval aşamasında kullanıcı ve içerik temsillerini ayrı kulelerde öğrenip benzerlik (similarity) ile aday seti ürettim. Re-ranking tarafında embedding’ler + etkileşim meta verileri ile Wide & Deep kullanarak bağlamsal sinyalleri sıralamaya taşıdım. Bu yapı, yüksek recall + daha iyi son liste kalitesi hedefler.",
            "en": "In retrieval, user and item representations are learned in separate towers and candidates are selected via similarity. For re-ranking, Wide & Deep combines embeddings with contextual features (interaction metadata) to produce a higher-quality final list."
          },
          "src": "images/baykar1.png"
        },
        {
          "title": {
            "tr": "Özellikler ve Öğrenme",
            "en": "Features & Learning"
          },
          "desc": {
            "tr": "Kullanıcı/öğe embedding’leri yanında; içerik türü, etkileşim tipi, zaman gibi sinyallerle feature engineering yaptım. Sentetik etkileşimlerle veri zenginleştirme yaklaşımını pipeline’a entegre ederek sparsity ve cold-start etkisini azaltmayı hedefledim.",
            "en": "Beyond embeddings, engineered features from content type, interaction type, and temporal signals. Added synthetic interactions to enrich data and reduce sparsity/cold-start issues."
          },
          "src": "images/baykar2.png"
        }
      ],
      "concise": {
        "features": [
          "Two-Tower retrieval selects candidates; Wide & Deep ranks them.",
          "TurkishBERTweet and interaction signals cover Instagram, Twitter and Next Sosyal."
        ],
        "result": "Offline evaluation covered 5,170 users across three platforms.",
        "features_tr": [
          "Two-Tower adayları seçer; Wide & Deep sıralar.",
          "TurkishBERTweet ve etkileşim sinyalleri Instagram, Twitter ve Next Sosyal verilerini işler."
        ],
        "result_tr": "Üç platformda 5.170 kullanıcı üzerinde çevrimdışı değerlendirme yapıldı."
      }
    },
    "transporter": {
      "id": "transporter",
      "icon": "🚚",
      "title": {
        "en": "Transport 245",
        "tr": "Transport 245"
      },
      "company": {
        "tr": "Bağımsız Ürün · Transport 245",
        "en": "Independent Product · Transport 245"
      },
      "period": {
        "tr": "Şub 2026 – Devam Ediyor",
        "en": "Feb 2026 – Present"
      },
      "location": {
        "tr": "İstanbul, Türkiye",
        "en": "Istanbul, Turkey"
      },
      "description": {
        "en": "A mobile-ready transport marketplace with maps, orders, ratings and chat.",
        "tr": "Harita, sipariş, puanlama ve sohbet içeren ulaşım pazaryeri."
      },
      "tech": [
        "Next.js 15",
        "React 19",
        "Capacitor",
        "NestJS",
        "MongoDB",
        "Firebase Auth",
        "MapLibre",
        "TypeScript"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Transporter App with Chatbot, çok parçalı lojistik ihtiyaçlarını tek mobil deneyimde toplamak için geliştirildi. Ürün; kullanıcının yakındaki kurumları haritada keşfetmesini, kategori bazlı filtrelerle doğru hizmete ulaşmasını, kurumlarla arama/mesajlaşma başlatmasını ve süreç sonunda değerlendirme ya da şikayet bırakmasını mümkün kılıyor. Aynı ürün hattı iOS, Android ve web üzerinde çalışırken, Transport 245 markasıyla App Store ve Google Play dağıtımına da hazır hale getirildi.",
          "en": "Transporter App with Chatbot was built to unify fragmented logistics needs inside one mobile product. The app lets users discover nearby providers on a live map, narrow results by service category, initiate calls or messages, and leave ratings or complaints after the interaction. The same product line runs across iOS, Android, and web, and is prepared for public distribution under the Transport 245 brand on the App Store and Google Play."
        }
      },
      "responsibilities": {
        "tr": [
          "Next.js 15 + React 19 arayüzünü Capacitor ile native iOS/Android paketlerine taşıyarak tek kod tabanından çok platformlu ürün akışı kurdum.",
          "MapLibre tabanlı harita deneyimi, kategori/alt kategori filtreleri, favoriler, geçmiş siparişler, değerlendirme/şikayet ekranları ve chatbot akışlarını tek kullanıcı yolculuğunda birleştirdim.",
          "NestJS + MongoDB backend tarafında kurum verileri, siparişler, tarifeler, raporlar ve chat modüllerini destekleyen servis mimarisini; provider/admin panelleriyle birlikte ürünle hizaladım."
        ],
        "en": [
          "Turned the Next.js 15 + React 19 interface into native iOS and Android packages with Capacitor, keeping the product flow on a single codebase.",
          "Integrated the MapLibre-based map, category/subcategory filters, favorites, order history, ratings/complaints, and chatbot interactions into one coherent user journey.",
          "Aligned the NestJS + MongoDB backend with the product by supporting provider data, orders, tariffs, reports, and chat modules together with provider/admin management screens."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Platformlar",
            "en": "Platforms"
          },
          "value": "iOS + Android + Web"
        },
        {
          "label": {
            "tr": "Hizmet Modları",
            "en": "Service Modes"
          },
          "value": "Tow + Freight + Charge + Passenger"
        },
        {
          "label": {
            "tr": "Mobil Paketleme",
            "en": "Native Packaging"
          },
          "value": "Capacitor"
        },
        {
          "label": {
            "en": "Release stage",
            "tr": "Yayın aşaması"
          },
          "value": "Native packages prepared"
        }
      ],
      "details": [
        {
          "title": {
            "tr": "Ürün Kapsamı",
            "en": "Product Scope"
          },
          "lead": {
            "tr": "Uygulama sadece tek bir dikey için değil, farklı lojistik ihtiyaçlarını ortak bir keşif ve aksiyon yüzeyinde toplamak için tasarlandı.",
            "en": "The product was designed not for one narrow vertical, but to unify multiple logistics needs under a shared discovery and action surface."
          },
          "bullets": {
            "tr": [
              "Kurtarıcı, vinç, yurt içi/yurt dışı nakliye, mobil şarj, istasyon ve yolcu taşıma gibi farklı hizmet modlarını tek arayüz içinde bir araya getirdim.",
              "Harita üstünden kurum keşfi, filtrelenmiş listeleme, arama/mesaj başlatma, siteye gitme, favorilere ekleme ve kurum detaylarını açma gibi aksiyonları aynı panel mantığıyla kurguladım.",
              "Geçmiş sipariş, favoriler, değerlendirme bırakma ve şikayet oluşturma ekranlarıyla ürünün sadece keşif değil, sonrası için de kapalı devre bir deneyim sunmasını sağladım."
            ],
            "en": [
              "Brought towing, crane, domestic/international freight, mobile charging, station, and passenger transport modes into one shared interface.",
              "Designed map discovery, filtered lists, call/message actions, website routing, favorites, and provider detail views around one consistent action-panel pattern.",
              "Extended the product beyond discovery with order history, favorites, ratings, and complaint creation so the workflow remains closed-loop after service discovery."
            ]
          }
        },
        {
          "title": {
            "tr": "Sistem Mimarisi",
            "en": "System Architecture"
          },
          "lead": {
            "tr": "Ürünün ana mühendislik değeri, modern web stack’i native mobil dağıtıma ve operasyonel backend modüllerine bağlamasında yatıyor.",
            "en": "The main engineering value comes from connecting a modern web stack to native mobile distribution and operational backend modules."
          },
          "paragraphs": {
            "tr": [
              "Frontend tarafında Next.js 15, React 19 ve TypeScript kullanıldı; harita deneyimi MapLibre ile kuruldu, kimlik doğrulama ise Firebase üzerinden Google ve Apple girişlerini destekleyecek şekilde genişletildi.",
              "Mobil tarafta Capacitor ile iOS ve Android projeleri üretildi; app adı, ikonlar, manifest ve native ayarlar Transport 245 markası altında yönetildi. Backend’de NestJS ve Mongoose tabanlı servisler; kurum verisi, tarifeler, sipariş, chat ve rapor modüllerini taşıyor."
            ],
            "en": [
              "On the frontend, the app uses Next.js 15, React 19, and TypeScript; the live map experience is powered by MapLibre, while authentication is expanded through Firebase to support Google and Apple sign-in.",
              "On mobile, Capacitor generates the iOS and Android shells; app naming, icons, manifest assets, and native settings are managed under the Transport 245 brand. On the backend, NestJS and Mongoose-based services support provider data, tariffs, orders, chat, and reports."
            ]
          }
        },
        {
          "title": {
            "tr": "Yayın ve Operasyon",
            "en": "Release and Operations"
          },
          "lead": {
            "tr": "Bu proje sadece bir demo arayüz değil; gerçek kullanıcı, kurum ve destek akışlarını taşıyacak şekilde ürünleştirildi.",
            "en": "This is not just a demo UI; it was productized to handle real user, provider, and support workflows."
          },
          "bullets": {
            "tr": [
              "Provider kayıt ekranları ve yönetici modülleriyle kurum onboarding, tarife yönetimi ve destek operasyonlarını ürün içine gömdüm.",
              "KVKK / kullanıcı sözleşmesi, destek sayfaları, şikayet modülleri ve değerlendirme akışlarıyla mağaza yayınına uygun güven ve yasal katmanlar ekledim.",
              "Transport 245 markasıyla App Store ve Google Play için hazır native dağıtım hattı kurarak ürünü sadece web’de değil mağaza ekosisteminde de konumlandırdım."
            ],
            "en": [
              "Embedded provider onboarding, tariff management, and admin-side support workflows through dedicated provider-registration and management modules.",
              "Added privacy/legal screens, support pages, complaint modules, and review flows to make the product ready for public-store expectations and trust requirements.",
              "Prepared native distribution under the Transport 245 brand for both the App Store and Google Play so the product is positioned beyond the web alone."
            ]
          }
        }
      ],
      "images": [
        {
          "src": "images/transporter1.png",
          "title": {
            "tr": "Harita Odaklı Lojistik Keşfi",
            "en": "Map-First Logistics Discovery"
          },
          "desc": {
            "tr": "Açılış ekranı, kullanıcıyı doğrudan yakınındaki hizmet ağına indiriyor. Harita üstündeki canlı yoğunluk ve kategori girişleri, kurtarıcıdan lastikçiye kadar hızlı keşif hissini öne çıkarıyor.",
            "en": "The opening screen drops the user directly into a nearby service network. Live density on the map and category-first entry points make discovery feel immediate across towing and roadside services."
          }
        },
        {
          "src": "images/transporter2.png",
          "title": {
            "tr": "Mobil Ürün Dili ve Mağaza Sunumu",
            "en": "Mobile Product Language and Store Presentation"
          },
          "desc": {
            "tr": "Bu görsel, ürünün sadece fonksiyonel değil aynı zamanda mağaza vitrini için de hazırlandığını gösteriyor. Hız ve kullanım kolaylığı, App Store yaratıcılarında doğrudan vurgulanmış.",
            "en": "This visual shows that the product is shaped not only for functionality, but also for store-facing presentation. Speed and ease of use are framed directly in the App Store creative."
          }
        },
        {
          "src": "images/transporter3.png",
          "title": {
            "tr": "Küresel Ağ Görünürlüğü",
            "en": "Worldwide Network Visibility"
          },
          "desc": {
            "tr": "Nakliye modu dünya çapında kurum kapsamasını gösteren daha geniş bir ağ görünümü sunuyor. Avrupa, Amerika ve Türkiye üzerindeki dağılım, ürünün yerel kullanımın ötesine uzanan bir platform mantığıyla düşünüldüğünü hissettiriyor.",
            "en": "The freight mode expands into a wider network view that communicates international provider coverage. The distribution across Europe, America, and Turkey frames the product as a platform rather than a purely local utility."
          }
        },
        {
          "src": "images/transporter4.png",
          "title": {
            "tr": "Nakliye Arama ve Aksiyon Paneli",
            "en": "Freight Search and Action Panel"
          },
          "desc": {
            "tr": "Kategori ve alt kategori filtreleriyle kullanıcıyı doğrudan uygun nakliyeci listesine indiriyor. Kart içi arama, mesaj, form görüntüleme ve şikayet akışları aynı yüzeyde birleşiyor.",
            "en": "Category and subcategory filters take the user straight into an appropriate freight list. Call, message, review, and complaint actions are surfaced together inside the same card interaction model."
          }
        },
        {
          "src": "images/transporter5.png",
          "title": {
            "tr": "Ayarlar, Favoriler ve Şikayet Geçmişi",
            "en": "Settings, Favorites, and Complaint History"
          },
          "desc": {
            "tr": "Ayarlar ekranı geçmiş siparişler, favori firmalar ve bırakılan değerlendirmeler gibi ilişkiyi uzun vadeye taşıyan parçaları içeriyor. Bu yapı ürünü tek seferlik aramadan düzenli kullanıma taşıyor.",
            "en": "The settings area includes past orders, favorite providers, and submitted ratings, extending the experience beyond a one-off search. That structure turns the app into a repeat-use service layer."
          }
        },
        {
          "src": "images/transporter6.png",
          "title": {
            "tr": "Şarj İstasyonu Keşfi",
            "en": "Charging Station Discovery"
          },
          "desc": {
            "tr": "Şarj akışı, istasyon ve mobil şarj ayrımını netleştirirken kayıtlı kurumlara hızlı geri dönüş imkanı veriyor. Aynı tasarım sistemi farklı hizmet modlarına uyarlanarak ürün bütünlüğü korunuyor.",
            "en": "The charging flow distinguishes stations from mobile charging while making it easy to return to saved providers. The same design system adapts across service modes without losing product cohesion."
          }
        },
        {
          "src": "images/transporter7.png",
          "title": {
            "tr": "Yolcu Taşıma ve VIP Transfer",
            "en": "Passenger Transport and VIP Transfer"
          },
          "desc": {
            "tr": "Yolcu taşıma görünümü, minibus/otobüs/VIP gibi seçenekleri aynı harita ve kart sistemiyle sunuyor. Böylece ürün yalnızca yük odaklı değil, hareketin farklı senaryolarına açılan çok modlu bir ağ haline geliyor.",
            "en": "The passenger transport view brings minibus, bus, and VIP transfer options into the same map-and-card system. That turns the product into a multi-modal mobility network rather than a freight-only experience."
          }
        }
      ],
      "url": "https://github.com/mesely/transporter-app-with-chatbot",
      "concise": {
        "features": [
          "Next.js/React and MapLibre for discovery; NestJS/MongoDB for service data.",
          "Capacitor provides native packaging; Firebase handles authentication."
        ],
        "result": "Native packages were prepared; app-store publication is not confirmed.",
        "features_tr": [
          "Keşif için Next.js/React ve MapLibre; servis verisi için NestJS/MongoDB.",
          "Capacitor mobil paketleme sağlar; Firebase kimlik doğrulamayı yönetir."
        ],
        "result_tr": "Mobil paketler hazırlandı; uygulama mağazasında yayımlandığı doğrulanmadı."
      }
    },
    "bmc": {
      "id": "bmc",
      "icon": "💬",
      "title": {
        "en": "BMC — Inventory Assistant",
        "tr": "BMC — Inventory Assistant"
      },
      "company": {
        "tr": "BMC",
        "en": "BMC"
      },
      "period": {
        "tr": "Tem – Ağu 2025",
        "en": "Jul – Aug 2025"
      },
      "location": {
        "tr": "İzmir, Türkiye",
        "en": "Izmir, Turkey"
      },
      "description": {
        "en": "A natural-language assistant for SAP inventory workflows.",
        "tr": "SAP stok süreçleri için doğal dilde envanter asistanı."
      },
      "tech": [
        "NestJS",
        "Next.js",
        "OpenAI API",
        "RAG",
        "SAP",
        "ABAP",
        "TypeScript"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Kullanıcıların doğal dilde envanter sorgusu yapıp güvenilir cevap alabilmesi için RAG tabanlı bir asistan geliştirdim. Amaç; kurumsal dokümanlar/kurallar ve canlı SAP verisini birlikte kullanarak tutarlı, izlenebilir yanıt üretmek ve operasyonel süreci hızlandırmaktı.",
          "en": "Developed a RAG-based assistant so users can query inventory in natural language and get reliable answers. The system combines enterprise knowledge with live SAP data to produce consistent, traceable responses and speed up operations."
        }
      },
      "responsibilities": {
        "tr": [
          "RAG akışını uçtan uca geliştirdim: sorgu → bağlam getirme → yanıt üretimi (NestJS + Next.js + OpenAI).",
          "OOP ABAP ile malzeme takibi ve otomatik e-posta uyarıları gibi modüller tasarlayıp uyguladım."
        ],
        "en": [
          "Implemented the full RAG flow end-to-end: query → retrieval → generation (NestJS + Next.js + OpenAI).",
          "Designed and implemented ABAP modules for material tracking and automated email alerts."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Mimari",
            "en": "Architecture"
          },
          "value": "RAG Chatbot"
        },
        {
          "label": {
            "tr": "Stack",
            "en": "Stack"
          },
          "value": "NestJS + Next.js"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "RAG Akışı ve Sistem",
            "en": "RAG Flow & System"
          },
          "desc": {
            "tr": "Kullanıcı sorusunu önce ilgili bağlam (doküman/parça/kural) ile eşleyip ardından LLM’e kontrollü şekilde besleyen bir akış tasarladım. Yanıt kalitesini artırmak için prompt yapısı ve bağlam seçimi üzerinde iteratif iyileştirmeler yaptım.",
            "en": "Designed a pipeline that retrieves the most relevant context (docs/rules/snippets) before controlled LLM generation. Iteratively improved prompt structure and retrieval selection to increase answer quality."
          },
          "src": "images/bmc1.png"
        },
        {
          "title": {
            "tr": "SAP Süreç Entegrasyonu",
            "en": "SAP Process Integration"
          },
          "desc": {
            "tr": "Envanter süreçlerini ABAP modülleriyle destekleyerek chatbot kullanımını operasyonel akışa bağladım. Bildirim/uyarı mekanizmalarıyla proaktif kullanım senaryolarını genişlettim.",
            "en": "Connected the assistant to operational workflows via ABAP modules. Added alert/notification mechanisms to enable proactive usage scenarios."
          },
          "src": "images/bmc2.png"
        }
      ],
      "concise": {
        "features": [
          "NestJS/Next.js and OpenAI connect the interface to inventory data.",
          "ABAP material tracking and automated low-stock alerts."
        ],
        "result": "",
        "features_tr": [
          "NestJS/Next.js ve OpenAI, arayüzü stok verilerine bağlar.",
          "ABAP malzeme takibi ve otomatik düşük stok uyarıları."
        ],
        "result_tr": ""
      }
    },
    "intertech": {
      "id": "intertech",
      "icon": "💰",
      "title": {
        "en": "Intertech — Financial RAG",
        "tr": "Intertech — Financial RAG"
      },
      "company": {
        "tr": "Intertech",
        "en": "Intertech"
      },
      "period": {
        "tr": "Haz – Ağu 2024",
        "en": "Jun – Aug 2024"
      },
      "location": {
        "tr": "İstanbul, Türkiye",
        "en": "Istanbul, Turkey"
      },
      "description": {
        "en": "A financial assistant that answers questions using daily bulletins.",
        "tr": "Günlük bültenleri kullanarak finans sorularını yanıtlayan RAG asistanı."
      },
      "tech": [
        "Node.js",
        "Next.js",
        "SQL",
        "Python",
        "RAG",
        "Azure Blob Storage",
        "Web Scraping"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Finansal içeriklerin günlük toplanması, temizlenmesi, depolanması ve kullanıcı sorularına bağlamlı yanıt üretilmesi için uçtan uca bir RAG platformu kurguladım. Hedef; analist iş yükünü azaltırken güncel içgörüye erişimi hızlandırmaktı.",
          "en": "Designed an end-to-end RAG platform to collect, clean, store, and answer questions over financial content. The goal was to reduce analyst workload and speed up access to up-to-date insights."
        }
      },
      "responsibilities": {
        "tr": [
          "Next.js + Node.js + SQL ile retrieval + cevap üretimi akışını web arayüzüne taşıdım.",
          "Python scraping ile günlük bültenleri otomatik alıp işleyerek Azure Blob Storage’a aktardım."
        ],
        "en": [
          "Implemented the web experience for retrieval + generation using Next.js + Node.js + SQL.",
          "Automated daily bulletin ingestion with Python scraping and stored processed data in Azure Blob Storage."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Mimari",
            "en": "Architecture"
          },
          "value": "RAG + Data Pipeline"
        },
        {
          "label": {
            "tr": "Bulut",
            "en": "Cloud"
          },
          "value": "Azure Blob Storage"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Veri Toplama & Depolama",
            "en": "Ingestion & Storage"
          },
          "desc": {
            "tr": "Kaynaklardan bültenleri otomatik çekip temizledim ve model/arama katmanına uygun formata getirdim. Bu akış günlük çalışacak şekilde tasarlanarak veri sürekliliği sağlandı.",
            "en": "Automated retrieval and cleaning of bulletins, then transformed them into a format suitable for retrieval and generation. The pipeline was designed to run daily for continuous freshness."
          },
          "src": "images/intertech1.png"
        },
        {
          "title": {
            "tr": "Uçtan Uca Chat Deneyimi",
            "en": "End-to-End Chat Experience"
          },
          "desc": {
            "tr": "Kullanıcı sorusu → ilgili içeriklerin retrieval’ı → yanıt üretimi akışını backend sorgu katmanı ile birleştirerek üretim odaklı hale getirdim. Yanıtların bağlamlı olması için kaynak parçalarıyla hizalama hedeflendi.",
            "en": "Combined query → retrieval → generation with a backend SQL layer to make the system production-oriented. Responses are grounded by aligning them with retrieved source snippets."
          },
          "src": "images/intertech2.png"
        }
      ],
      "concise": {
        "features": [
          "Automated bulletin collection, Python processing and Azure Blob storage.",
          "Node.js/Next.js application with Docker, Kubernetes and Azure CI/CD."
        ],
        "result": "",
        "features_tr": [
          "Otomatik bülten toplama, Python işleme ve Azure Blob depolama.",
          "Docker, Kubernetes ve Azure CI/CD ile Node.js/Next.js uygulaması."
        ],
        "result_tr": ""
      }
    },
    "arastirma": {
      "id": "arastirma",
      "icon": "🗣️",
      "title": {
        "en": "Intent Detection & Slot Filling",
        "tr": "Intent Detection & Slot Filling"
      },
      "company": {
        "tr": "Araştırma Projesi",
        "en": "Research Project"
      },
      "period": {
        "tr": "Eyl 2024 – Oca 2025",
        "en": "Sep 2024 – Jan 2025"
      },
      "location": {
        "tr": "Sabancı Üniversitesi",
        "en": "Sabanci University"
      },
      "description": {
        "en": "Joint intent classification and token-level slot prediction on SNIPS.",
        "tr": "SNIPS üzerinde intent sınıflandırması ve token düzeyinde slot tahmini."
      },
      "tech": [
        "NLP",
        "Slot-Gated BiLSTM",
        "FastText",
        "Bayesian Search",
        "PyTorch",
        "SNIPS"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Amaç; intent detection ve slot filling görevlerini tek bir mimaride ortak optimize ederek daha tutarlı bir NLU altyapısı oluşturmaktı. Reprodüksiyon odaklı yaklaşım ile model davranışını metrikler ve karşılaştırmalar üzerinden analiz ettim.",
          "en": "Goal was to jointly optimize intent detection and slot filling in a unified NLU architecture. Using a reproduction-oriented approach, I analyzed behavior via metrics and systematic comparisons."
        }
      },
      "responsibilities": {
        "tr": [
          "SNIPS üzerinde Slot-Gated BiLSTM reprodüksiyonu ve deneysel değerlendirme yaptım.",
          "FastText embedding’leri ve Bayesian hiperparametre araması ile ML (LR, XGBoost) ve DL (LSTM, BiLSTM) kıyaslamaları yaptım."
        ],
        "en": [
          "Reproduced Slot-Gated BiLSTM and ran experimental evaluation on SNIPS.",
          "Compared ML (LR, XGBoost) and DL (LSTM, BiLSTM) with FastText embeddings and Bayesian hyperparameter search."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Intent",
            "en": "Intent"
          },
          "value": "%97"
        },
        {
          "label": {
            "tr": "Slot",
            "en": "Slot"
          },
          "value": "%79"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Model Mimarisi",
            "en": "Model Architecture"
          },
          "desc": {
            "tr": "Intent ve slot görevleri arasında bilgi akışını slot-gate mekanizmasıyla kurarak ortak öğrenmeyi güçlendirdim. Ablation mantığında embedding ve model seçeneklerini kıyaslamaya uygun yapı hazırladım.",
            "en": "Enabled shared learning between intent and slots using a slot-gate mechanism. Prepared a structure suitable for ablation-style comparisons across embeddings and model variants."
          },
          "src": "images/arastirma1.png"
        },
        {
          "title": {
            "tr": "Deney & Karşılaştırma",
            "en": "Experiments & Comparison"
          },
          "desc": {
            "tr": "Bayesian search ile hiperparametreleri optimize ederek performansı dengeli şekilde artırdım. Sonuçları intent/slot metrikleri üzerinden yorumlayıp model seçim stratejisi çıkardım.",
            "en": "Optimized hyperparameters with Bayesian search for balanced gains. Interpreted results through intent/slot metrics to derive a model selection strategy."
          },
          "src": "images/arastirma2.png"
        }
      ],
      "concise": {
        "features": [
          "Slot-Gated BiLSTM with FastText representations.",
          "Compared LR, XGBoost, LSTM and BiLSTM using Bayesian hyperparameter search."
        ],
        "result": "Reported intent accuracy: 97%; slot accuracy: 79%.",
        "features_tr": [
          "FastText temsilleriyle Slot-Gated BiLSTM.",
          "Bayesian hiperparametre aramasıyla LR, XGBoost, LSTM ve BiLSTM karşılaştırması."
        ],
        "result_tr": "Raporlanan intent doğruluğu: %97; slot doğruluğu: %79."
      }
    },
    "influencer": {
      "id": "influencer",
      "icon": "📊",
      "title": {
        "en": "Influencer & Engagement Prediction",
        "tr": "Influencer & Engagement Prediction"
      },
      "company": {
        "tr": "Kişisel Proje",
        "en": "Personal Project"
      },
      "period": {
        "tr": "Eyl 2024 – Oca 2025",
        "en": "Sep 2024 – Jan 2025"
      },
      "location": {
        "tr": "İstanbul, Türkiye",
        "en": "Istanbul, Turkey"
      },
      "description": {
        "en": "Classifies influencer profiles and predicts post likes.",
        "tr": "Influencer profillerini sınıflandırır ve gönderi beğenilerini tahmin eder."
      },
      "tech": [
        "Scikit-learn",
        "Random Forest",
        "Logistic Regression",
        "SMOTE",
        "Stacking",
        "Regression"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Amaç; influencer’ları segment bazlı sınıflandırmak ve etkileşim (beğeni) davranışını tahmin ederek karar destek sağlamak. Dengesiz/gürültülü veriyi iyileştirip daha sağlam bir genelleme için stacking yaklaşımını kullandım.",
          "en": "Goal was to segment influencers and predict engagement (likes) for decision support. Improved noisy/imbalanced data and used stacking to achieve stronger generalization."
        }
      },
      "responsibilities": {
        "tr": [
          "Random Forest + Logistic Regression ile stacking classifier kurup %86.7 F1 elde ettim.",
          "SMOTE ve domain-specific preprocessing ile veriyi iyileştirip RF Regressor ile beğeni tahmini yaptım."
        ],
        "en": [
          "Implemented a stacking classifier (RF + LR) and achieved 86.7 F1.",
          "Applied SMOTE + domain-specific preprocessing and predicted likes using RF Regressor."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Sınıflandırma",
            "en": "Classification"
          },
          "value": "F1 = 86.7"
        },
        {
          "label": {
            "tr": "Yaklaşım",
            "en": "Approach"
          },
          "value": "Stacking + SMOTE"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Veri & Ön İşleme",
            "en": "Data & Preprocessing"
          },
          "desc": {
            "tr": "Gürültülü sosyal medya verileri için alan odaklı temizleme ve özellik çıkarımı yaptım. Dengesiz sınıflar için SMOTE ile dengeleme uygulayıp modelin minority sınıflarda da öğrenmesini güçlendirdim.",
            "en": "Performed domain-specific cleaning and feature extraction on noisy social media data. Applied SMOTE to balance classes and improve learning on minority segments."
          },
          "src": "images/influencer1.png"
        },
        {
          "title": {
            "tr": "Sınıflandırma (Stacking)",
            "en": "Classification (Stacking)"
          },
          "desc": {
            "tr": "Temel modellerin güçlü yanlarını birleştiren stacking kurgusuyla daha stabil performans elde ettim. F1 odaklı değerlendirme ile eşik/parametre ayarlarını optimize ettim.",
            "en": "Used stacking to combine strengths of base models and achieve more stable performance. Optimized thresholds/parameters with an F1-centric evaluation."
          },
          "src": "images/influencer2.png"
        },
        {
          "title": {
            "tr": "Regresyon (Beğeni Tahmini)",
            "en": "Regression (Like Prediction)"
          },
          "desc": {
            "tr": "Etkileşim dağılımındaki çarpıklığı dikkate alarak regresyon tarafını kurguladım. RF Regressor ile beğeni tahminleri üretip hata analizi yaptım.",
            "en": "Designed the regression setup with skewed engagement distributions in mind. Produced like predictions with RF Regressor and ran error analysis."
          },
          "src": "images/influencer3.png"
        }
      ],
      "concise": {
        "features": [
          "Random Forest + Logistic Regression stacking with SMOTE and domain-specific preprocessing.",
          "A separate Random Forest regressor estimates likes."
        ],
        "result": "Reported classification F1: 86.7%.",
        "features_tr": [
          "SMOTE ve alana özgü ön işlemeyle Random Forest + Logistic Regression stacking.",
          "Ayrı bir Random Forest regressor beğeni sayısını tahmin eder."
        ],
        "result_tr": "Raporlanan sınıflandırma F1: %86,7."
      }
    },
    "echospace": {
      "id": "echospace",
      "icon": "🥽",
      "title": {
        "en": "EchoSpaceAR",
        "tr": "EchoSpaceAR"
      },
      "company": {
        "tr": "Proje (HCI)",
        "en": "HCI Project"
      },
      "period": {
        "en": "Sep 2025 - Present",
        "tr": "Eyl 2025 - Devam ediyor"
      },
      "location": {
        "tr": "Sabancı Üniversitesi",
        "en": "Sabanci University"
      },
      "description": {
        "en": "An AR prototype that turns environmental sounds and speech into visual cues.",
        "tr": "Çevresel sesleri ve konuşmayı görsel ipuçlarına dönüştüren AR prototipi."
      },
      "tech": [
        "Unity",
        "C#",
        "AR UI",
        "YAMNet",
        "Whisper",
        "AutoBEME",
        "HCI"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Hedef; kullanıcının çevresel ses farkındalığını artıran bir AR arayüz tasarlamak ve gerçek zamanlı ses sınıflandırma + konuşma metinleştirme çıktılarıyla anlamlı geri bildirimler sunmaktı. UI kararları HCI prensipleriyle uyumlu olacak şekilde kurgulandı.",
          "en": "Goal was to increase environmental sound awareness via an AR interface, providing meaningful real-time feedback from sound classification and speech-to-text. UI decisions were grounded in HCI principles."
        }
      },
      "responsibilities": {
        "tr": [
          "Unity’de AR UI entegrasyonu + C# scriptleriyle gerçek zamanlı cue/HUD akışı geliştirdim.",
          "Stereo ses akışından YAMNet sınıflandırma ve Whisper STT çıktıları üretip sunucu tarafında işledim.",
          "Çevresel ses sınıflandırması için AutoBEME tabanlı ensemble denemeleri kurup hata dayanıklılığını artıran model karşılaştırmaları hazırladım."
        ],
        "en": [
          "Implemented AR UI integration and real-time cue/HUD flow in Unity with C#.",
          "Generated YAMNet classifications and Whisper STT from stereo audio and processed results server-side.",
          "Set up AutoBEME-based ensemble experiments for environmental sound classification and prepared model comparisons to improve robustness."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Alan",
            "en": "Domain"
          },
          "value": "AR + HCI"
        },
        {
          "label": {
            "tr": "AI",
            "en": "AI"
          },
          "value": "YAMNet + Whisper"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "AR Arayüz & Cue/HUD Akışı",
            "en": "AR UI & Cue/HUD Flow"
          },
          "desc": {
            "tr": "Kullanıcıya bağlamlı uyarılar sunan AR katmanını tasarladım. UI bileşenleri gerçek zamanlı güncellenerek “ses → görsel ipucu” dönüşümü akıcı hale getirildi.",
            "en": "Designed an AR layer that presents contextual cues. UI components update in real-time to provide a smooth “sound → visual cue” experience."
          },
          "src": "images/echospace1.png"
        },
        {
          "title": {
            "tr": "Ses İşleme Pipeline",
            "en": "Audio Processing Pipeline"
          },
          "desc": {
            "tr": "Çevresel ses sınıflandırması (YAMNet) ve konuşma metinleştirme (Whisper) çıktıları birleştirilerek arayüze anlamlı şekilde yansıtıldı. Böylece kullanıcı hem ortam seslerini hem konuşma içeriğini görsel olarak takip edebildi.",
            "en": "Combined environmental sound classification (YAMNet) with speech-to-text (Whisper) and surfaced the results meaningfully in the UI, enabling users to track both ambient sounds and spoken content."
          },
          "src": "images/echospace2.png"
        }
      ],
      "details": [
        {
          "title": {
            "en": "Human-computer interaction",
            "tr": "Human-computer interaction"
          },
          "paragraphs": {
            "en": [
              "The interface translates sound events and spoken content into contextual visual feedback within the AR scene. Unity owns presentation and interaction; the server owns audio inference. The prototype explores assistive interaction, without claiming a completed clinical or accessibility study."
            ],
            "tr": [
              "The interface translates sound events and spoken content into contextual visual feedback within the AR scene. Unity owns presentation and interaction; the server owns audio inference. The prototype explores assistive interaction, without claiming a completed clinical or accessibility study."
            ]
          }
        }
      ],
      "url": "https://github.com/mesely/SU-CS449-549-Final-Project-EchoSpaceAR",
      "concise": {
        "features": [
          "YAMNet recognizes sound events; Whisper transcribes speech.",
          "Unity/C# places contextual cues and a HUD in the AR scene."
        ],
        "result": "",
        "features_tr": [
          "YAMNet ses olaylarını tanır; Whisper konuşmayı yazıya çevirir.",
          "Unity/C#, AR sahnesine bağlamsal ipuçları ve HUD yerleştirir."
        ],
        "result_tr": ""
      }
    },
    "polieco": {
      "id": "polieco",
      "icon": "🏛️",
      "title": {
        "en": "Political-Economy Networks",
        "tr": "Political-Economy Networks"
      },
      "company": {
        "tr": "Akademik Araştırma Projesi",
        "en": "Academic Research Project"
      },
      "period": {
        "tr": "Oca 2026 – Devam ediyor",
        "en": "Jan 2026 – Present"
      },
      "location": {
        "tr": "Sabancı Üniversitesi, İstanbul",
        "en": "Sabanci University, Istanbul"
      },
      "description": {
        "en": "Research linking parliamentary language and network structure to economic indicators.",
        "tr": "Meclis dili ve ağ yapısını ekonomik göstergelerle inceleyen araştırma."
      },
      "tech": [
        "Python",
        "NetworkX",
        "Pandas",
        "Statsmodels",
        "Matplotlib",
        "NLP",
        "TBMM",
        "Political Economy",
        "AutoBEME"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Bu projede amaç, meclis söylemini sadece metin olarak değil, zaman içinde değişen siyasi etkileşim ağı olarak okumaktı. Bu yüzden konuşmalardan kim kimi destekliyor, kim kimi hedef alıyor, hangi kavramlar ekonomi ve reform tartışmalarını taşıyor, bunlar finansal stres ve kur hareketleriyle birlikte nasıl hareket ediyor sorularını tek bir ölçüm çerçevesinde topladım. Sonuçta sadece güzel ağ görselleri değil, hipotez kurulabilen ve rapora taşınabilen bir araştırma paketi ortaya çıktı.",
          "en": "The goal was to read parliamentary speech not just as text, but as a changing political interaction network over time. I turned debates into a measurement framework that asks who supports whom, who attacks whom, which concepts carry economic and reform framing, and how those patterns move with financial stress and FX dynamics. The result is not just a set of polished network visualizations, but a full research package that supports testable hypotheses and publication-style reporting."
        }
      },
      "responsibilities": {
        "tr": [
          "TBMM konuşmalarından parti -> parti yönlü ve işaretli ağları, kavram ağlarını ve yıllık/dönemlik alt ağları üreten veri pipeline’ını kurdum.",
          "Closeness, betweenness, PageRank, reciprocity, konu sahipliği ve semantik mesafe gibi ölçüleri ekonomi verileri ve olay pencereleriyle eşleştiren istatistiksel analiz katmanını geliştirdim.",
          "Model seçimini savunmak için insan etiketli gold set, çok-modelli karşılaştırma ve AutoBEME/BERT tabanlı doğrulama notebook’ları hazırladım."
        ],
        "en": [
          "Built the data pipeline that converts TBMM transcripts into signed directed party-to-party graphs, concept networks, and yearly/term-level subgraphs.",
          "Developed the statistical layer that links closeness, betweenness, PageRank, reciprocity, topic ownership, and semantic distance to macro indicators and event windows.",
          "Prepared human-annotated gold sets, model-comparison notebooks, and AutoBEME/BERT validation workflows to make model selection defensible."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Kapsam",
            "en": "Coverage"
          },
          "value": "TBMM 22–28. dönem"
        },
        {
          "label": {
            "tr": "Ana katman",
            "en": "Core layers"
          },
          "value": "Directed + Bipartite + Macro"
        },
        {
          "label": {
            "tr": "Doğrulama",
            "en": "Validation"
          },
          "value": "733-row annotation pack"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Yönlü Parti Akışları",
            "en": "Directed Inter-Party Flows"
          },
          "desc": {
            "tr": "Pozitif destek ve negatif saldırı ağlarını aynı çerçevede kurarak hangi partinin hedef düğüm, hangisinin saldırı kaynağı olduğunu görünür hale getirdim. Bu katman, kutuplaşmanın yalnızca konuşma hacmiyle değil, yönlü siyasi akışlarla ölçülmesini sağladı.",
            "en": "I modeled positive support and negative attack flows in the same frame to show which party acts as the main target and which one drives outgoing attacks. This layer measures polarization through directional political flow rather than raw speech volume."
          },
          "src": "images/polieco1.png"
        },
        {
          "title": {
            "tr": "Parti Rolleri ve Merkezilik",
            "en": "Party Roles and Centrality"
          },
          "desc": {
            "tr": "Ağın hangi tarafında baskın hedefleme, hangi tarafta köprü rolü ve hangi düğümde negatif baskı biriktiğini weighted targeting, betweenness ve PageRank ile özetledim. Böylece ağ metrikleri doğrudan siyasi yorum üretir hale geldi.",
            "en": "Summarized where outgoing pressure, brokerage, and incoming negative load accumulate using weighted targeting, betweenness, and PageRank. That turns graph metrics into directly interpretable political roles."
          },
          "src": "images/polieco2.png"
        },
        {
          "title": {
            "tr": "Aylık Söylem-Makro Paneli",
            "en": "Monthly Discourse-Macro Panel"
          },
          "desc": {
            "tr": "Aylık panelde ekonomi, reform, kriz, demokrasi ve anayasa çerçevelerini makro volatilite, finansal stres ve kur hareketleriyle birlikte izledim. Bu yapı, ağ ölçümlerini sadece statik grafik olmaktan çıkarıp zaman serisi hipotez testine taşıdı.",
            "en": "The monthly panel tracks economy, reform, crisis, democracy, and constitutional framing alongside macro volatility, financial stress, and FX movement. This turns the graphs from static visuals into a time-series hypothesis-testing setup."
          },
          "src": "images/polieco3.png"
        },
        {
          "title": {
            "tr": "Yönlü Hipotez Testleri",
            "en": "Directed Hypothesis Tests"
          },
          "desc": {
            "tr": "Directed ağdan türetilen değişkenleri Newey-West katsayılarıyla test ederek hangi siyasi ilişki desenlerinin gerçekten ekonomik stres ve semantik ayrışma ile bağlantılı olduğunu ayırdım. Görsel, ağ anlatısını nicel kanıt katmanına bağlayan son adımı gösteriyor.",
            "en": "Used Newey-West regression estimates on directed-network variables to separate which political interaction patterns are actually linked to financial stress and semantic divergence. This figure is the bridge from network storytelling to quantitative evidence."
          },
          "src": "images/polieco4.png"
        }
      ],
      "concise": {
        "features": [
          "Directed and signed networks model speaker and party relationships.",
          "NetworkX and Statsmodels support centrality, semantic-distance and event-window analysis."
        ],
        "result": "A 733-row human-annotation pack supports validation; causal conclusions are not established.",
        "features_tr": [
          "Yönlü ve işaretli ağlar konuşmacı ve parti ilişkilerini modeller.",
          "NetworkX ve Statsmodels ile merkezilik, anlamsal uzaklık ve olay penceresi analizi."
        ],
        "result_tr": "733 satırlık insan anotasyonu doğrulamayı destekler; nedensel sonuçlar henüz gösterilmedi."
      }
    },
    "music": {
      "id": "music",
      "icon": "🎵",
      "title": {
        "en": "Music Emotion Recognition",
        "tr": "Music Emotion Recognition"
      },
      "company": {
        "tr": "Deep Learning Projesi",
        "en": "Deep Learning Project"
      },
      "period": {
        "tr": "Eyl 2025 – Oca 2026",
        "en": "Sep 2025 – Jan 2026"
      },
      "location": {
        "tr": "Sabancı Üniversitesi",
        "en": "Sabanci University"
      },
      "description": {
        "en": "Predicts arousal and valence from music using the DEAM dataset.",
        "tr": "DEAM veri kümesinde müzikten arousal ve valence tahmini."
      },
      "tech": [
        "PyTorch",
        "CNN",
        "Attention Pooling",
        "Log-Mel",
        "Regression",
        "DEAM"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Amaç; şarkıyı tek bir pencereden değil, segment-level temsiller üzerinden öğrenip bu temsilleri dikkat (attention) ile ağırlıklandırarak song-level duygu tahminini güçlendirmekti. Bu sayede “hangi segmentler duyguyu taşıyor?” sorusuna da dolaylı bir açıklanabilirlik katmanı eklenmiş oldu. Train-only global z-normalization kullanarak veri sızıntısı (leakage) riskini azaltıp daha doğru değerlendirme hedefledim.",
          "en": "Goal was to learn emotion from segment-level representations and aggregate them with attention to improve song-level predictions. This also adds interpretability by indicating which segments matter most. Train-only global z-normalization reduces leakage risk and yields more trustworthy evaluation."
        }
      },
      "responsibilities": {
        "tr": [
          "Log-mel spectrogram + 5 sn segmentasyon (50% overlap) + train-only global z-normalization içeren pipeline’ı kurguladım.",
          "Attention pooling ve attention-head ensemble ile song-level performansı iyileştirdim."
        ],
        "en": [
          "Built the full pipeline: log-mel spectrograms + 5s segmentation (50% overlap) + train-only global z-normalization.",
          "Improved song-level performance with attention pooling and an attention-head ensemble strategy."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "MSE",
            "en": "MSE"
          },
          "value": "0.0114"
        },
        {
          "label": {
            "tr": "CCC",
            "en": "CCC"
          },
          "value": "0.689"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Pipeline & Özellikler",
            "en": "Pipeline & Features"
          },
          "desc": {
            "tr": "Ham ses sinyalini log-mel spectrogram’a dönüştürüp 5 saniyelik segmentler halinde (50% overlap) örnekledim. Normalizasyonu train-only global yaklaşımıyla yaparak test verisine bilgi sızıntısını engelledim. Bu pipeline, modelin hem stabil öğrenmesini hem de daha adil değerlendirilmesini sağlar.",
            "en": "Converted raw audio into log-mel spectrograms and sampled 5-second segments with 50% overlap. Used train-only global normalization to prevent leakage into the test set. This improves training stability and makes evaluation more reliable."
          },
          "src": "images/music1.png"
        },
        {
          "title": {
            "tr": "Attention Pooling & Ensemble",
            "en": "Attention Pooling & Ensemble"
          },
          "desc": {
            "tr": "Segment bazlı CNN çıktılarından şarkı düzeyinde tek tahmin üretmek için attention pooling kullandım. Ek olarak birden fazla attention-head’in çıktısını birleştirerek ensemble etkisi yarattım ve genelleme performansını artırdım. Böylece farklı segment türlerine duyarlı daha sağlam bir toplama mekanizması elde edildi.",
            "en": "Used attention pooling to aggregate segment-level CNN outputs into a single song-level prediction. Additionally combined multiple attention-head outputs (ensemble-like effect) to improve generalization and robustness across different segment patterns."
          },
          "src": "images/music2.png"
        }
      ],
      "concise": {
        "features": [
          "Five-second log-mel windows with 50% overlap.",
          "CNN features, attention pooling and a head ensemble; normalization uses training data only."
        ],
        "result": "Recorded test results: MSE 0.0114; Pearson 0.721; CCC 0.689.",
        "features_tr": [
          "%50 örtüşmeli, beş saniyelik log-mel pencereleri.",
          "CNN, attention pooling ve head ensemble; normalizasyon yalnızca eğitim verisini kullanır."
        ],
        "result_tr": "Kayıtlı test: MSE 0,0114; Pearson 0,721; CCC 0,689."
      }
    },
    "bluesky": {
      "id": "bluesky",
      "icon": "🦋",
      "title": {
        "en": "BlueSky — Turkish Topic Feeds",
        "tr": "BlueSky — Turkish Topic Feeds"
      },
      "company": {
        "tr": "Bitirme Projesi",
        "en": "Graduation Project"
      },
      "period": {
        "en": "Graduation project · 2026",
        "tr": "Bitirme projesi · 2026"
      },
      "location": {
        "tr": "Sabancı Üniversitesi",
        "en": "Sabanci University"
      },
      "description": {
        "en": "A completed graduation project that creates Turkish topic-based BlueSky feeds.",
        "tr": "Türkçe konu odaklı BlueSky akışları oluşturan tamamlanmış bitirme projesi."
      },
      "tech": [
        "AT Protocol",
        "Bluesky Firehose",
        "BERTurk",
        "Flask",
        "PostgreSQL",
        "Railway",
        "WebSocket",
        "NLP"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Projenin amacı, Türkçe içerikler için yalnızca genel etkileşim sinyallerine dayanan sıralama yerine konuya duyarlı ve açıklanabilir özel akışlar üretmekti. Sistem, yüksek hacimli akıştan gelen gönderileri önce hızlı filtreleme ile daraltıyor; ardından dil tespiti, embedding üretimi, alan sınıflandırması ve skor hesaplama aşamalarından geçirerek iki canlı akış için kullanılabilir hale getiriyor.",
          "en": "The goal of the project was to move beyond generic engagement-based ranking and build topic-aware, explainable custom feeds for Turkish-language content. The system first narrows a high-volume stream with fast pre-filtering, then processes posts through language detection, embedding, domain classification, and score computation before serving two live feeds."
        }
      },
      "responsibilities": {
        "tr": [
          "AT Protocol firehose üzerinden gerçek zamanlı veri alımı, hızlı ön filtreleme ve kuyruk mantığıyla çalışan çok aşamalı işleme hattını tasarladım.",
          "BERTurk tabanlı zero-shot domain sınıflandırma yaklaşımıyla Türkçe siyaset ve bilim içeriklerini etiketleyen NLP pipeline’ını kurdum.",
          "Flask + PostgreSQL + Railway bileşenleriyle üretim ortamına uygun servis mimarisini ve iki canlı akışı uçtan uca devreye aldım."
        ],
        "en": [
          "Designed the real-time ingestion flow on top of the AT Protocol firehose, including fast pre-filtering and queue-based processing.",
          "Built the BERTurk-based NLP pipeline that labels Turkish politics and science content with a zero-shot domain classification approach.",
          "Deployed the feed-serving stack end-to-end with Flask, PostgreSQL, and Railway, powering two live custom feeds."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Canlı Feed",
            "en": "Live Feeds"
          },
          "value": "2"
        },
        {
          "label": {
            "tr": "Seed Kullanıcı",
            "en": "Seed Users"
          },
          "value": "270"
        },
        {
          "label": {
            "tr": "NLP Aşaması",
            "en": "NLP Stages"
          },
          "value": "5"
        },
        {
          "label": {
            "tr": "Embedding",
            "en": "Embedding"
          },
          "value": "768-dim"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Sistem Mimarisi",
            "en": "System Architecture"
          },
          "desc": {
            "tr": "Sistem, feed server ile NLP worker’ı ayıran iki servisli bir mimari üzerine kuruldu. Bu sayede düşük gecikmeli feed sunumu ile yüksek hacimli akış işleme birbirinden ayrıştırıldı ve PostgreSQL ortak veri katmanı olarak kullanıldı.",
            "en": "The system is built around a two-service architecture that separates the feed server from the NLP worker. This makes low-latency feed serving independent from high-volume stream processing while PostgreSQL acts as the shared persistence layer."
          },
          "src": "images/bluesky1.png"
        },
        {
          "title": {
            "tr": "Veri Akışı ve Ön Filtreleme",
            "en": "Data Flow and Pre-filtering"
          },
          "desc": {
            "tr": "Firehose’dan gelen yüksek hacimli veri doğrudan pahalı NLP aşamalarına gönderilmedi. Seed kullanıcı kontrolü ve keyword taraması ile aday havuz daraltılarak CPU maliyeti düşürüldü ve yalnızca daha anlamlı içerikler derin işleme hattına alındı.",
            "en": "The high-volume firehose stream is not sent directly into expensive NLP stages. Instead, seed-user checks and keyword scanning narrow the candidate pool, reducing CPU cost and routing only more relevant posts into the deeper pipeline."
          },
          "src": "images/bluesky2.png"
        },
        {
          "title": {
            "tr": "NLP Pipeline",
            "en": "NLP Pipeline"
          },
          "desc": {
            "tr": "İşleme hattı Türkçe dil tespiti, BERTurk embedding üretimi, zero-shot domain sınıflandırma, siyaset gönderileri için stance tespiti ve nihai skor hesaplama aşamalarından oluşuyor. Bu yapı etiketli eğitim verisi olmadan da operasyonel olarak kullanılabilir bir sınıflandırma akışı sağladı.",
            "en": "The processing pipeline consists of Turkish language detection, BERTurk embedding generation, zero-shot domain classification, stance detection for political posts, and final score computation. This structure enabled an operational classification flow without requiring a fully labeled training set."
          },
          "src": "images/bluesky3.png"
        },
        {
          "title": {
            "tr": "Topic-based Expansion",
            "en": "Topic-based Expansion"
          },
          "desc": {
            "tr": "Sistem yalnızca sabit feed mantığıyla sınırlı değil; olay yoğunluğunu zamansal olarak izleyen ek sinyallerle genişletilebiliyor. Bu analiz, belirli politik kırılma anlarında içerik hacminin nasıl yükseldiğini göstererek ranking tarafında event-intensity benzeri feature’ların potansiyelini ortaya koyuyor.",
            "en": "The system is not limited to a static feed logic; it can be extended with temporal signals that track event intensity. This analysis shows how content volume rises around political breakpoints and highlights the potential of event-intensity-style features for future ranking improvements."
          },
          "src": "images/bluesky4.png"
        },
        {
          "title": {
            "tr": "Discourse Similarity Analysis",
            "en": "Discourse Similarity Analysis"
          },
          "desc": {
            "tr": "Parti bazlı konu benzerliği analizi, tüm siyasi aktörlerin aynı söylemsel yapıda hareket etmediğini gösteriyor. Bu tür ölçümler gelecekte feed çeşitliliği, kaynak dengesi ve bağlamsal ranking feature’ları için kullanılabilecek ek içgörüler sunuyor.",
            "en": "Party-level discourse similarity analysis shows that political actors do not operate within a single homogeneous topical structure. Such measurements provide additional insight that can later support feed diversity, source balancing, and context-aware ranking features."
          },
          "src": "images/bluesky5.png"
        }
      ],
      "url": "https://github.com/mesely/BlueSky",
      "concise": {
        "features": [
          "Filters the AT Protocol firehose, then applies five NLP stages and 768-dimensional BERTurk embeddings.",
          "Flask serves precomputed PostgreSQL results; Railway hosts the feed service."
        ],
        "result": "Two feeds, initialized from 270 seed accounts.",
        "features_tr": [
          "AT Protocol firehose verisini filtreler; beş NLP aşaması ve 768 boyutlu BERTurk uygular.",
          "Flask, PostgreSQL’de önceden hesaplanan sonuçları sunar; servis Railway üzerinde çalışır."
        ],
        "result_tr": "270 başlangıç hesabından verilerle oluşturulan iki akış."
      }
    },
    "tbmm": {
      "id": "tbmm",
      "icon": "🕸️",
      "title": {
        "en": "TBMM — Parliamentary Corpus",
        "tr": "TBMM — Parliamentary Corpus"
      },
      "company": {
        "tr": "Sabancı Üniversitesi Araştırma Projesi",
        "en": "Sabanci University Research Project"
      },
      "period": {
        "tr": "2025 – Devam ediyor",
        "en": "2025 – Present"
      },
      "location": {
        "tr": "İstanbul, Türkiye",
        "en": "Istanbul, Turkey"
      },
      "description": {
        "en": "A Turkish parliamentary corpus and NLP evaluation pipeline.",
        "tr": "Türkçe meclis konuşmaları için veri derlemi ve NLP değerlendirme hattı."
      },
      "tech": [
        "Python",
        "Network Science",
        "NLP",
        "Data Cleaning",
        "Political Economy",
        "Research Dashboards"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Bu proje, TBMM tutanaklarını yalnızca bir metin arşivi olarak değil; zaman içinde değişen siyasi aktörler, partiler, kavramlar ve ekonomik kırılmalar arasında kurulan dinamik bir ağ sistemi olarak modelliyor. Veri toplama, OCR/encoding temizliği, tarihsel parti düzeltmeleri, dönem bazlı EDA, kelime alanı denetimi ve çok katmanlı ağ üretimini tek bir araştırma hattında birleştiriyor.",
          "en": "This project treats parliamentary transcripts not just as a text archive, but as a dynamic networked system linking political actors, parties, concepts, and economic turning points over time. It brings together data collection, OCR/encoding cleanup, historical party repair, term-level EDA, lexical auditing, and multilayer network generation in one research pipeline."
        }
      },
      "responsibilities": {
        "tr": [
          "TBMM tutanaklarını `partyfixed` veri setine taşıyan temizlik/doğrulama hattını; OCR bozulmaları, tarihsel parti değişimleri ve dönem bazlı etiket onarımlarıyla güçlendirdim.",
          "22-28. dönemler için yıllık network görselleri, metrik dashboard'ları, konuşma hacmi grafikleri ve kelime alanı çıktıları üreten analiz scriptlerini tek akışta birleştirdim.",
          "Network science, lexical audit ve siyasi-ekonomi hipotezlerini aynı veri omurgasında buluşturarak sonraki ekonometrik testlere açılabilecek bir araştırma altyapısı kurdum."
        ],
        "en": [
          "Strengthened the transcript cleanup/validation pipeline into a `partyfixed` dataset with OCR repair, historical party changes, and term-specific label correction.",
          "Unified the scripts that generate yearly network figures, metric dashboards, speech-volume plots, and lexical field outputs across legislative terms 22-28.",
          "Connected network science, lexical audit, and political-economy hypotheses on top of a shared data backbone that can support follow-up econometric testing."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Konuşma",
            "en": "Speeches"
          },
          "value": "1.33M+"
        },
        {
          "label": {
            "tr": "Tutanak",
            "en": "Transcripts"
          },
          "value": "2,829"
        },
        {
          "label": {
            "tr": "Konuşmacı",
            "en": "Speakers"
          },
          "value": "5,017"
        },
        {
          "label": {
            "tr": "Parti",
            "en": "Parties"
          },
          "value": "19"
        },
        {
          "label": {
            "tr": "Model Macro-F1",
            "en": "Model Macro-F1"
          },
          "value": "0.640"
        },
        {
          "label": {
            "tr": "Neg / Pos F1",
            "en": "Neg / Pos F1"
          },
          "value": "0.766 / 0.514"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Yıllık Ağ Evrimi",
            "en": "Yearly Network Evolution"
          },
          "desc": {
            "tr": "Kapak görseli, seçilmiş bir yasama döneminde üretilen yıllık ağ görünümlerini bir araya getiriyor. Amaç, konuşma ilişkilerinin ve yapısal kümelenmenin zaman içinde nasıl farklılaştığını tek bakışta göstermek.",
            "en": "The cover figure combines yearly network views from a selected legislative term. It highlights how speech relations and structural clustering shift over time within the same parliamentary period."
          },
          "src": "images/tbmm1.png"
        },
        {
          "title": {
            "tr": "Dönem ve Parti Bazlı Konuşma Hacmi",
            "en": "Speech Volume by Term and Party"
          },
          "desc": {
            "tr": "Bu çıktı, yasama dönemleri boyunca hangi parti bloklarının meclis söylem hacmini taşıdığını karşılaştırmalı biçimde gösteriyor. Veri setinin kapsamını ve dönemler arası söylem yoğunluğu değişimini özetleyen temel EDA görsellerinden biri.",
            "en": "This plot compares which party blocs carry parliamentary speech volume across legislative terms. It acts as a core EDA view for both dataset coverage and changes in discourse intensity over time."
          },
          "src": "images/tbmm2.png"
        },
        {
          "title": {
            "tr": "Kelime Alanı ve Söylem Haritası",
            "en": "Lexical Field and Discourse Map"
          },
          "desc": {
            "tr": "Kelime alanı görseli, söylemde baskın temaları ve birlikte öne çıkan kavramsal kümeleri yüzeye çıkarıyor. Ağ analizine geçmeden önce hangi semantik alanların politik-ekonomik anlatıyı sürüklediğini okumayı kolaylaştırıyor.",
            "en": "The lexical field view surfaces dominant themes and concept clusters that repeatedly rise together in the corpus. Before moving into network analysis, it provides a quick read on which semantic areas drive the political-economy narrative."
          },
          "src": "images/tbmm3.png"
        },
        {
          "title": {
            "tr": "Model Karşılaştırması ve Sınıflandırıcı Seçimi",
            "en": "Model Comparison and Classifier Selection"
          },
          "desc": {
            "tr": "Model_Comprasion çıktısındaki karşılaştırma figürü, TBMM ikili duygu sınıflandırması için AutoBEME varyantları ile frozen transfer BERT modellerini aynı F1 ölçeğinde karşılaştırıyor. Son metriklerde AutoBEME-Apocalypse en dengeli seçim olarak öne çıktı: Neg F1=0.766, Macro-F1=0.640 ve Pos F1=0.514. Vanguard Macro-F1=0.628, Sovereign Macro-F1=0.615, BERTurk transfer Macro-F1=0.624 ve TurkishBERTweet transfer Macro-F1=0.558 seviyesinde kaldı.",
            "en": "The comparison figure from the Model_Comprasion outputs compares AutoBEME variants and frozen-transfer BERT models on the same F1 scale for TBMM binary sentiment classification. In the latest metrics, AutoBEME-Apocalypse is the most balanced choice: Neg F1=0.766, Macro-F1=0.640, and Pos F1=0.514. Vanguard reached Macro-F1=0.628, Sovereign Macro-F1=0.615, BERTurk transfer Macro-F1=0.624, and TurkishBERTweet transfer Macro-F1=0.558."
          },
          "src": "images/tbmm4.png"
        }
      ],
      "concise": {
        "features": [
          "Repairs OCR, speaker identities and historical party labels.",
          "Builds term-specific datasets and compares frozen-transfer BERT baselines with AutoBEME."
        ],
        "result": "1.33M+ speeches, 2,829 transcripts and 5,017 speakers. Separate TBMM Macro-F1: 0.624 → 0.640.",
        "features_tr": [
          "OCR hatalarını, konuşmacı kimliklerini ve tarihsel parti etiketlerini düzeltir.",
          "Döneme özgü veri kümeleri oluşturur; frozen-transfer BERT modellerini AutoBEME ile karşılaştırır."
        ],
        "result_tr": "1,33M+ konuşma, 2.829 tutanak ve 5.017 konuşmacı. Ayrı TBMM Macro-F1: 0,624 → 0,640."
      }
    },
    "sneakpeek": {
      "id": "sneakpeek",
      "icon": "🛍️",
      "title": {
        "en": "SneakPeek",
        "tr": "SneakPeek"
      },
      "company": {
        "tr": "Kişisel Proje",
        "en": "Personal Project"
      },
      "period": {
        "tr": "Mar 2025 – Haz 2025",
        "en": "Mar 2025 – Jun 2025"
      },
      "location": {
        "tr": "İstanbul, Türkiye",
        "en": "Istanbul, Turkey"
      },
      "description": {
        "en": "A sneaker-shopping application with a GPT-based product recommender.",
        "tr": "GPT tabanlı ürün önerileri sunan sneaker alışveriş uygulaması."
      },
      "tech": [
        "NestJS",
        "Next.js",
        "Microservices",
        "OpenAI GPT",
        "JWT",
        "Kafka",
        "Docker"
      ],
      "overview": {
        "title": {
          "tr": "Özet",
          "en": "Summary"
        },
        "text": {
          "tr": "Amaç; modern bir e-ticaret deneyimini ölçeklenebilir bir altyapıyla kurmak ve kullanıcıya AI destekli ürün keşfi sunmaktı. Servisler arası iletişim, güvenli kimlik doğrulama ve dağıtım süreçleri üretim mantığıyla kurgulandı.",
          "en": "Goal was to build a scalable e-commerce experience and add AI-assisted product discovery. Inter-service communication, secure auth, and deployment were designed with production practices in mind."
        }
      },
      "responsibilities": {
        "tr": [
          "NestJS + Next.js ile mikroservis yaklaşımında e-ticaret altyapısını geliştirdim.",
          "GPT önerici, JWT auth, Kafka mesajlaşma ve Docker dağıtım süreçlerini entegre ettim."
        ],
        "en": [
          "Implemented the microservices-based e-commerce infrastructure with NestJS + Next.js.",
          "Integrated GPT recommender, JWT auth, Kafka messaging, and Docker-based deployment."
        ]
      },
      "kpis": [
        {
          "label": {
            "tr": "Mimari",
            "en": "Architecture"
          },
          "value": "Microservices"
        },
        {
          "label": {
            "tr": "AI",
            "en": "AI"
          },
          "value": "GPT-based Recommender"
        }
      ],
      "images": [
        {
          "title": {
            "tr": "Sistem & AI Önerici",
            "en": "System & AI Recommender"
          },
          "desc": {
            "tr": "Ürün keşfini iyileştirmek için GPT tabanlı öneri katmanı entegre ettim. İstek akışında JWT ile auth, servisler arası Kafka iletişimi ve Docker ile dağıtımı birlikte kurguladım.",
            "en": "Integrated a GPT-based recommendation layer to improve product discovery. Combined JWT auth, Kafka-based service communication, and Docker deployment into a cohesive request flow."
          },
          "src": "images/sneakpeek1.png"
        }
      ],
      "concise": {
        "features": [
          "Eight NestJS services with Kafka/gRPC, JWT and Docker.",
          "Next.js client; unit, integration and end-to-end tests cover the shopping flows."
        ],
        "result": "",
        "features_tr": [
          "Kafka/gRPC, JWT ve Docker kullanan sekiz NestJS servisi.",
          "Next.js istemcisi; alışveriş akışları için unit, integration ve end-to-end testleri."
        ],
        "result_tr": ""
      }
    },
    "kth": {
      "id": "kth",
      "title": {
        "en": "KTH — LLM Graph Reasoning",
        "tr": "KTH — LLM Graph Reasoning"
      },
      "period": {
        "en": "Jul - Sep 2026",
        "tr": "Jul - Sep 2026"
      },
      "company": {
        "en": "KTH Royal Institute of Technology · Prof. Aristides Gionis",
        "tr": "KTH Royal Institute of Technology · Prof. Aristides Gionis"
      },
      "location": {
        "en": "Stockholm, Sweden",
        "tr": "Stockholm, Sweden"
      },
      "description": {
        "en": "Research on how text encodings affect Llama-3.1-8B graph reasoning.",
        "tr": "Metin kodlamalarının Llama-3.1-8B grafik muhakemesine etkisini inceler."
      },
      "tech": [
        "Python",
        "PyTorch",
        "Llama-3.1-8B",
        "NetworkX",
        "Slurm",
        "LLM Evaluation"
      ],
      "overview": {
        "title": {
          "en": "Problem and approach",
          "tr": "Problem ve yaklaşım"
        },
        "text": {
          "en": "Research internship on graph reasoning in Llama-3.1-8B: controlled text encodings, algorithmic ground truth and reproducible GPU evaluation. The internship ended in September; a separate October research continuation is still at pilot stage.",
          "tr": "Llama-3.1-8B ile grafik muhakemesi üzerine araştırma stajı: kontrollü metin kodlamaları, algoritmik doğru cevaplar ve yeniden üretilebilir GPU değerlendirmesi. Staj Eylül’de bitti; Ekim araştırma devamı ayrı bir pilot çalışma."
        }
      },
      "responsibilities": {
        "en": [
          "Implemented graph generation, text encodings and prompt conditions; scored model responses against algorithmic answers.",
          "Ported the released Talk Like a Graph benchmark and ran resumable GPU experiments on Berzelius with Slurm.",
          "Recorded raw responses, run configurations, checksums and scoring artifacts so an improvement could be audited."
        ],
        "tr": [
          "Implemented graph generation, text encodings and prompt conditions; scored model responses against algorithmic answers.",
          "Ported the released Talk Like a Graph benchmark and ran resumable GPU experiments on Berzelius with Slurm.",
          "Recorded raw responses, run configurations, checksums and scoring artifacts so an improvement could be audited."
        ]
      },
      "kpis": [
        {
          "label": {
            "en": "bipartite graphs",
            "tr": "bipartite graphs"
          },
          "value": "120"
        },
        {
          "label": {
            "en": "questions per condition",
            "tr": "questions per condition"
          },
          "value": "1,750"
        },
        {
          "label": {
            "en": "balanced accuracy",
            "tr": "balanced accuracy"
          },
          "value": "80.68% → 98.63%"
        }
      ],
      "details": [
        {
          "title": {
            "en": "What the model sees",
            "tr": "What the model sees"
          },
          "paragraphs": {
            "en": [
              "The input is a graph expressed as text. Graph topology, encoding, density, labels and question location can all affect the answer. I varied these factors and separated same-side, cross-edge and cross-nonedge behavior instead of interpreting one pooled score as general reasoning."
            ],
            "tr": [
              "The input is a graph expressed as text. Graph topology, encoding, density, labels and question location can all affect the answer. I varied these factors and separated same-side, cross-edge and cross-nonedge behavior instead of interpreting one pooled score as general reasoning."
            ]
          }
        },
        {
          "title": {
            "en": "Query-local adjacency experiment",
            "tr": "Query-local adjacency experiment"
          },
          "paragraphs": {
            "en": [
              "In the recorded bipartite lookup experiment, adding a query-local adjacency cue increased balanced accuracy from 80.68% to 98.63% on the same 1,750-question evaluation across 120 graphs. Both values use the same metric; this is a bounded lookup result."
            ],
            "tr": [
              "In the recorded bipartite lookup experiment, adding a query-local adjacency cue increased balanced accuracy from 80.68% to 98.63% on the same 1,750-question evaluation across 120 graphs. Both values use the same metric; this is a bounded lookup result."
            ]
          }
        },
        {
          "title": {
            "en": "Benchmark reproduction and failure modes",
            "tr": "Benchmark reproduction and failure modes"
          },
          "paragraphs": {
            "en": [
              "The released suite contains nine text encodings and seven graph tasks. My reproduction uses Llama-3.1-8B rather than the original paper’s PaLM models. One full graph-structure run produced 27,600 responses across seven families and six tasks.",
              "Zero-shot cycle detection scored 100% on stars, 95% on paths and 1.8% on scale-free graphs. This family-level contrast motivated structural controls rather than a universal graph-reasoning claim."
            ],
            "tr": [
              "The released suite contains nine text encodings and seven graph tasks. My reproduction uses Llama-3.1-8B rather than the original paper’s PaLM models. One full graph-structure run produced 27,600 responses across seven families and six tasks.",
              "Zero-shot cycle detection scored 100% on stars, 95% on paths and 1.8% on scale-free graphs. This family-level contrast motivated structural controls rather than a universal graph-reasoning claim."
            ]
          }
        },
        {
          "title": {
            "en": "Continuation and engineering controls",
            "tr": "Continuation and engineering controls"
          },
          "bullets": {
            "en": [
              "The October pilot import re-scored 5,844 recorded values with zero differences. Further matched-random, label-position and structural-hint experiments remain pilot/follow-up work.",
              "Resumable jobs and separate frozen datasets, model outputs and scoring artifacts support reproducibility without conflating a successful import with a completed experiment."
            ],
            "tr": [
              "The October pilot import re-scored 5,844 recorded values with zero differences. Further matched-random, label-position and structural-hint experiments remain pilot/follow-up work.",
              "Resumable jobs and separate frozen datasets, model outputs and scoring artifacts support reproducibility without conflating a successful import with a completed experiment."
            ]
          }
        }
      ],
      "images": [
        {
          "src": "images/kth1.png",
          "title": {
            "en": "Query-local adjacency result",
            "tr": "Query-local adjacency result"
          },
          "desc": {
            "en": "Recorded balanced accuracy; 120 graphs and 1,750 questions per condition.",
            "tr": "Recorded balanced accuracy; 120 graphs and 1,750 questions per condition."
          }
        },
        {
          "src": "images/kth2.png",
          "title": {
            "en": "Graph-family failure modes",
            "tr": "Graph-family failure modes"
          },
          "desc": {
            "en": "Recorded zero-shot cycle-detection cells from the 27,600-response graph-structure run.",
            "tr": "Recorded zero-shot cycle-detection cells from the 27,600-response graph-structure run."
          }
        }
      ],
      "url": "https://github.com/google-research/talk-like-a-graph",
      "concise": {
        "features": [
          "Reproduced graph tasks with frozen inputs, response logs and scoring scripts.",
          "Compared query-local cues and performance across seven graph families."
        ],
        "result": "Bipartite lookup balanced accuracy: 80.68% → 98.63% on the same 1,750 questions. Cycle detection: star 100%, path 95%, scale-free 1.8%.",
        "features_tr": [
          "Sabit girdiler, yanıt kayıtları ve puanlama kodlarıyla grafik görevlerini yeniden ürettim.",
          "Sorguya yakın ipuçlarını ve yedi grafik ailesindeki performansı karşılaştırdım."
        ],
        "result_tr": "Aynı 1.750 soruda bipartite lookup dengelenmiş doğruluğu: %80,68 → %98,63. Döngü tespiti: yıldız %100, yol %95, scale-free %1,8."
      }
    },
    "advisu": {
      "id": "advisu",
      "title": {
        "en": "adviSU",
        "tr": "adviSU"
      },
      "period": {
        "en": "Apr 2026 - Present",
        "tr": "Apr 2026 - Present"
      },
      "company": {
        "en": "Independent project · Sabancı University curriculum",
        "tr": "Independent project · Sabancı University curriculum"
      },
      "location": {
        "en": "Istanbul / remote",
        "tr": "Istanbul / remote"
      },
      "description": {
        "en": "An academic adviser with chat, degree audits and weekly course planning.",
        "tr": "Sohbet, mezuniyet kontrolü ve haftalık ders planlama sunan akademik danışman."
      },
      "tech": [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "MongoDB",
        "BM25F",
        "E5 Embeddings",
        "BERT-based Intent Routing",
        "RAG"
      ],
      "overview": {
        "title": {
          "en": "Problem and approach",
          "tr": "Problem ve yaklaşım"
        },
        "text": {
          "en": "A bilingual academic adviser that combines official curriculum retrieval with deterministic degree audits and course scheduling. The chat explains evidence and calculated results; academic rules and timetable conflicts are checked in code.",
          "tr": "Resmî müfredat aramasını deterministik mezuniyet denetimi ve ders programıyla birleştiren iki dilli akademik danışman. Sohbet kanıtları ve hesaplanan sonuçları gösterir; akademik kurallar ve saat çakışmaları kodla kontrol edilir."
        }
      },
      "responsibilities": {
        "en": [
          "Implemented curriculum ingestion, profile/term scoping, degree categories, prerequisite checks and conflict-free scheduling.",
          "Combined field-weighted BM25F and multilingual E5 embeddings with reciprocal-rank fusion and metadata boosts.",
          "Built bilingual chat and a weekly schedule view with evidence tables, CRNs, export, revision checks and recoverable errors."
        ],
        "tr": [
          "Implemented curriculum ingestion, profile/term scoping, degree categories, prerequisite checks and conflict-free scheduling.",
          "Combined field-weighted BM25F and multilingual E5 embeddings with reciprocal-rank fusion and metadata boosts.",
          "Built bilingual chat and a weekly schedule view with evidence tables, CRNs, export, revision checks and recoverable errors."
        ]
      },
      "kpis": [
        {
          "label": {
            "en": "curriculum chunks",
            "tr": "curriculum chunks"
          },
          "value": "30,343"
        },
        {
          "label": {
            "en": "scored held-out queries",
            "tr": "scored held-out queries"
          },
          "value": "499"
        },
        {
          "label": {
            "en": "Recall@10",
            "tr": "Recall@10"
          },
          "value": "59.92% → 94.19%"
        }
      ],
      "details": [
        {
          "title": {
            "en": "Separate domain logic from explanation",
            "tr": "Separate domain logic from explanation"
          },
          "bullets": {
            "en": [
              "Degree audits categorize courses, count SU/ECTS credits and prevent duplicate counting under the student’s program and admission term.",
              "A committed BERT-based intent classifier routes requests; deterministic handlers answer calculations and scheduling requests. Missing inputs produce a clarification or abstention.",
              "Retrieved curriculum text is treated as untrusted evidence. Profile-scoped access, content quarantine, citation checks and output validation constrain the answer."
            ],
            "tr": [
              "Degree audits categorize courses, count SU/ECTS credits and prevent duplicate counting under the student’s program and admission term.",
              "A committed BERT-based intent classifier routes requests; deterministic handlers answer calculations and scheduling requests. Missing inputs produce a clarification or abstention.",
              "Retrieved curriculum text is treated as untrusted evidence. Profile-scoped access, content quarantine, citation checks and output validation constrain the answer."
            ]
          }
        },
        {
          "title": {
            "en": "Retrieval and evaluation",
            "tr": "Retrieval and evaluation"
          },
          "paragraphs": {
            "en": [
              "The frozen full-corpus test compares BM25 Recall@10 of 59.92% with hybrid BM25F + multilingual E5 + RRF + metadata at 94.19% over 30,343 chunks and 499 scorable queries. The paired-bootstrap 95% interval for the improvement is +29.86 to +38.88 percentage points.",
              "The benchmark is largely template-generated. Complete gold evidence was recovered for only 1 of 16 multi-evidence questions. This metric is retrieval recall on the stated split, not overall advising accuracy."
            ],
            "tr": [
              "The frozen full-corpus test compares BM25 Recall@10 of 59.92% with hybrid BM25F + multilingual E5 + RRF + metadata at 94.19% over 30,343 chunks and 499 scorable queries. The paired-bootstrap 95% interval for the improvement is +29.86 to +38.88 percentage points.",
              "The benchmark is largely template-generated. Complete gold evidence was recovered for only 1 of 16 multi-evidence questions. This metric is retrieval recall on the stated split, not overall advising accuracy."
            ]
          }
        },
        {
          "title": {
            "en": "Timetable planning and concurrency",
            "tr": "Timetable planning and concurrency"
          },
          "bullets": {
            "en": [
              "The planner searches primary sections with compatible recitation/lab components, checks prerequisites and rejects time overlaps.",
              "Chat and the schedule page share one canonical schedule object. Revision checks stop a stale tab from silently overwriting a newer edit.",
              "Visible weekly blocks, CRN copying and spreadsheet export support registration; cached state and retry feedback preserve work when a request fails."
            ],
            "tr": [
              "The planner searches primary sections with compatible recitation/lab components, checks prerequisites and rejects time overlaps.",
              "Chat and the schedule page share one canonical schedule object. Revision checks stop a stale tab from silently overwriting a newer edit.",
              "Visible weekly blocks, CRN copying and spreadsheet export support registration; cached state and retry feedback preserve work when a request fails."
            ]
          }
        },
        {
          "title": {
            "en": "HCI decisions",
            "tr": "HCI decisions"
          },
          "paragraphs": {
            "en": [
              "Counted-course tables let a student inspect a calculation rather than trust an unexplained total. Conversation history, explicit loading states, bilingual prompts and direct access to schedule/profile views support recovery and navigation."
            ],
            "tr": [
              "Counted-course tables let a student inspect a calculation rather than trust an unexplained total. Conversation history, explicit loading states, bilingual prompts and direct access to schedule/profile views support recovery and navigation."
            ]
          }
        }
      ],
      "images": [
        {
          "src": "images/advisu1.png",
          "title": {
            "en": "Chat and degree-audit output",
            "tr": "Chat and degree-audit output"
          },
          "desc": {
            "en": "Actual React/FastAPI UI with an isolated sample profile and official curriculum data. Sample grades are illustrative, not my transcript.",
            "tr": "Actual React/FastAPI UI with an isolated sample profile and official curriculum data. Sample grades are illustrative, not my transcript."
          }
        },
        {
          "src": "images/advisu2.png",
          "title": {
            "en": "Weekly course schedule",
            "tr": "Weekly course schedule"
          },
          "desc": {
            "en": "Actual schedule UI and official section data. Selected courses illustrate the interaction; this is not a personal registration plan.",
            "tr": "Actual schedule UI and official section data. Selected courses illustrate the interaction; this is not a personal registration plan."
          }
        }
      ],
      "url": "https://github.com/mesely/adviSU",
      "concise": {
        "features": [
          "BERT routes requests; BM25F + multilingual E5 retrieve curriculum evidence.",
          "Rule-based degree checks and a backtracking planner validate prerequisites, linked sections and time conflicts."
        ],
        "result": "Frozen retrieval test: Recall@10 increased from 59.92% to 94.19% over 499 queries and 30,343 chunks.",
        "features_tr": [
          "BERT istekleri yönlendirir; BM25F + çok dilli E5, müfredat kanıtlarını getirir.",
          "Kural tabanlı mezuniyet kontrolleri ve backtracking planlayıcısı ön koşulları, bağlı şubeleri ve saat çakışmalarını doğrular."
        ],
        "result_tr": "Sabit retrieval testinde Recall@10, 499 sorgu ve 30.343 parçada %59,92’den %94,19’a çıktı."
      }
    },
    "atcha": {
      "id": "atcha",
      "title": {
        "en": "Atcha",
        "tr": "Atcha"
      },
      "period": {
        "en": "Oct 2026 - Present",
        "tr": "Oct 2026 - Present"
      },
      "company": {
        "en": "Independent mobile product",
        "tr": "Independent mobile product"
      },
      "location": {
        "en": "Istanbul / remote",
        "tr": "Istanbul / remote"
      },
      "description": {
        "en": "A two-person mobile app for shared questions, games, chat and memories.",
        "tr": "İki kişi için ortak sorular, oyunlar, sohbet ve anılar sunan mobil uygulama."
      },
      "tech": [
        "Flutter",
        "Dart",
        "Riverpod",
        "go_router",
        "Supabase",
        "PostgreSQL",
        "Realtime",
        "Sentence-BERT"
      ],
      "overview": {
        "title": {
          "en": "Problem and approach",
          "tr": "Problem ve yaklaşım"
        },
        "text": {
          "en": "A Flutter application for two people to share questions, games, conversations and memories. The work combines understandable interaction states with server-authoritative updates, privacy boundaries and recovery from connection failures.",
          "tr": "İki kişinin sorular, oyunlar, sohbetler ve anılar paylaşabildiği Flutter uygulaması. Anlaşılır etkileşim durumlarını sunucu kontrollü güncellemeler, gizlilik sınırları ve bağlantı hatalarından kurtarma akışlarıyla birleştiriyorum."
        }
      },
      "responsibilities": {
        "en": [
          "Designed composing, sending, partner-waiting, reveal-ready and completed states with clear feedback and retry behavior.",
          "Implemented PostgreSQL RPCs, couple-scoped row-level security, idempotent offline writes and lifecycle-owned subscriptions.",
          "Integrated on-device multilingual Sentence-BERT similarity hints with conservative abstention, alongside shared games, memories and weekly views."
        ],
        "tr": [
          "Designed composing, sending, partner-waiting, reveal-ready and completed states with clear feedback and retry behavior.",
          "Implemented PostgreSQL RPCs, couple-scoped row-level security, idempotent offline writes and lifecycle-owned subscriptions.",
          "Integrated on-device multilingual Sentence-BERT similarity hints with conservative abstention, alongside shared games, memories and weekly views."
        ]
      },
      "kpis": [
        {
          "label": {
            "en": "UI languages",
            "tr": "UI languages"
          },
          "value": "7"
        },
        {
          "label": {
            "en": "recorded 30-row history query",
            "tr": "recorded 30-row history query"
          },
          "value": "180-205 ms"
        },
        {
          "label": {
            "en": "result-set equivalence checks",
            "tr": "result-set equivalence checks"
          },
          "value": "60/60"
        }
      ],
      "details": [
        {
          "title": {
            "en": "HCI: make shared states understandable",
            "tr": "HCI: make shared states understandable"
          },
          "bullets": {
            "en": [
              "Visibility of system status: composing, sending, waiting for a partner, ready to reveal and completed have explicit UI states. Errors and retries explain what is happening.",
              "Reciprocity and error prevention: answers remain locked until both people respond; the server validates the transition, so a client cannot reveal an answer early.",
              "Progressive disclosure: question, answer and reveal stages reduce simultaneous choices. Missing avatars use initials; unavailable signals degrade without blocking the main content.",
              "Semantic labels, 44-point targets, reduced-motion behavior and 2x-text visual cases are present in source/tests. These checks are not a formal user study or accessibility certification."
            ],
            "tr": [
              "Visibility of system status: composing, sending, waiting for a partner, ready to reveal and completed have explicit UI states. Errors and retries explain what is happening.",
              "Reciprocity and error prevention: answers remain locked until both people respond; the server validates the transition, so a client cannot reveal an answer early.",
              "Progressive disclosure: question, answer and reveal stages reduce simultaneous choices. Missing avatars use initials; unavailable signals degrade without blocking the main content.",
              "Semantic labels, 44-point targets, reduced-motion behavior and 2x-text visual cases are present in source/tests. These checks are not a formal user study or accessibility certification."
            ]
          }
        },
        {
          "title": {
            "en": "Server authority and least privilege",
            "tr": "Server authority and least privilege"
          },
          "bullets": {
            "en": [
              "Duel RPCs lock the shared row and validate the next transition, preventing stale taps from independently advancing a game.",
              "RLS derives the couple from auth.uid() rather than trusting a client-supplied couple ID. Realtime sends topic/typing signals; private content is re-fetched through RLS."
            ],
            "tr": [
              "Duel RPCs lock the shared row and validate the next transition, preventing stale taps from independently advancing a game.",
              "RLS derives the couple from auth.uid() rather than trusting a client-supplied couple ID. Realtime sends topic/typing signals; private content is re-fetched through RLS."
            ]
          }
        },
        {
          "title": {
            "en": "Recovery and resource ownership",
            "tr": "Recovery and resource ownership"
          },
          "bullets": {
            "en": [
              "An offline outbox retries transient errors with backoff and parks permanent failures. client_id-based idempotency and uniqueness constraints prevent duplicate writes.",
              "A reference-counted shared channel per name has explicit release and ownership. One avatar resolver avoids duplicate logic; signed URLs are cached for 45 minutes against a one-hour expiry.",
              "Lazy sliver rows, bounded 240-pixel avatar decoding and parallel startup reduce unnecessary work. Full-resolution photos are loaded for zoom."
            ],
            "tr": [
              "An offline outbox retries transient errors with backoff and parks permanent failures. client_id-based idempotency and uniqueness constraints prevent duplicate writes.",
              "A reference-counted shared channel per name has explicit release and ownership. One avatar resolver avoids duplicate logic; signed URLs are cached for 45 minutes against a one-hour expiry.",
              "Lazy sliver rows, bounded 240-pixel avatar decoding and parallel startup reduce unnecessary work. Full-resolution photos are loaded for zoom."
            ]
          }
        },
        {
          "title": {
            "en": "On-device text similarity",
            "tr": "On-device text similarity"
          },
          "paragraphs": {
            "en": [
              "A bundled multilingual DistilUSE-v2 Sentence-BERT backbone produces a 512-dimensional projection with a 128-token limit and small batches. Conservative cosine thresholds (at least 0.80 / at most 0.35) return similarity hints; ambiguous, negated, truncated or unsuitable inputs abstain.",
              "Raw answers are not sent to an inference provider. Similarity is not calibrated entailment or a relationship score."
            ],
            "tr": [
              "A bundled multilingual DistilUSE-v2 Sentence-BERT backbone produces a 512-dimensional projection with a 128-token limit and small batches. Conservative cosine thresholds (at least 0.80 / at most 0.35) return similarity hints; ambiguous, negated, truncated or unsuitable inputs abstain.",
              "Raw answers are not sent to an inference provider. Similarity is not calibrated entailment or a relationship score."
            ]
          }
        },
        {
          "title": {
            "en": "Performance evidence",
            "tr": "Performance evidence"
          },
          "paragraphs": {
            "en": [
              "The recorded history-query comparison on a 30-row page moved from about 500-535 ms to 180-205 ms after deployment. Existing equivalence checks matched 60/60 result sets. These are recorded query measurements, not a claim about every screen or device."
            ],
            "tr": [
              "The recorded history-query comparison on a 30-row page moved from about 500-535 ms to 180-205 ms after deployment. Existing equivalence checks matched 60/60 result sets. These are recorded query measurements, not a claim about every screen or device."
            ]
          }
        }
      ],
      "images": [
        {
          "src": "images/atcha1.png",
          "title": {
            "en": "Waiting for a partner",
            "tr": "Waiting for a partner"
          },
          "desc": {
            "en": "Deterministic UI-test render with sample content; the submitted answer remains locked.",
            "tr": "Deterministic UI-test render with sample content; the submitted answer remains locked."
          }
        },
        {
          "src": "images/atcha2.png",
          "title": {
            "en": "Ready to reveal",
            "tr": "Ready to reveal"
          },
          "desc": {
            "en": "The state changes only after both participants have responded.",
            "tr": "The state changes only after both participants have responded."
          }
        },
        {
          "src": "images/atcha3.png",
          "title": {
            "en": "Revealed answers",
            "tr": "Revealed answers"
          },
          "desc": {
            "en": "The reveal completes the interaction and offers the next action.",
            "tr": "The reveal completes the interaction and offers the next action."
          }
        },
        {
          "src": "images/atcha4.png",
          "title": {
            "en": "Games and shared activities",
            "tr": "Games and shared activities"
          },
          "desc": {
            "en": "Actual visual-test render; activity counts are sample data.",
            "tr": "Actual visual-test render; activity counts are sample data."
          }
        },
        {
          "src": "images/atcha5.png",
          "title": {
            "en": "Weekly view",
            "tr": "Weekly view"
          },
          "desc": {
            "en": "Actual visual-test render. Local NLP provides conservative hints with abstention.",
            "tr": "Actual visual-test render. Local NLP provides conservative hints with abstention."
          }
        },
        {
          "src": "images/atcha6.png",
          "title": {
            "en": "Memories",
            "tr": "Memories"
          },
          "desc": {
            "en": "Actual visual-test render with illustrative content.",
            "tr": "Actual visual-test render with illustrative content."
          }
        }
      ],
      "concise": {
        "features": [
          "Answers unlock after both people respond; explicit waiting and reveal states explain the next step.",
          "Server-validated transitions, RLS and an idempotent offline outbox protect shared state."
        ],
        "result": "Recorded 30-row history query: 500–535 ms → 180–205 ms; 60/60 result-set checks matched.",
        "features_tr": [
          "İki kişi de yanıtladığında cevaplar açılır; bekleme ve açılma durumları sonraki adımı gösterir.",
          "Sunucuda doğrulanan geçişler, RLS ve idempotent offline outbox ortak durumu korur."
        ],
        "result_tr": "Kayıtlı 30 satırlık geçmiş sorgusu: 500–535 ms → 180–205 ms; 60/60 sonuç kümesi kontrolü eşleşti."
      }
    },
    "sparseviz": {
      "id": "sparseviz",
      "title": {
        "en": "SparseViz",
        "tr": "SparseViz"
      },
      "period": {
        "en": "Sabancı PURE Research Program",
        "tr": "Sabancı PURE Research Program"
      },
      "company": {
        "en": "Research contribution",
        "tr": "Research contribution"
      },
      "location": {
        "en": "Istanbul / remote",
        "tr": "Istanbul / remote"
      },
      "description": {
        "en": "A C++ library for sparse matrix and tensor analysis.",
        "tr": "Seyrek matris ve tensör analizi için C++ araştırma kütüphanesi."
      },
      "tech": [
        "C++",
        "Sparse Matrices",
        "Algorithms",
        "Data Structures",
        "Performance Profiling"
      ],
      "overview": {
        "title": {
          "en": "Problem and approach",
          "tr": "Problem ve yaklaşım"
        },
        "text": {
          "en": "Contributed to a CPU/GPU performance-profiling and visualization library for sparse matrices and tensors, with C++ implementation and optimization of ordering algorithms.",
          "tr": "Seyrek matris ve tensörler için CPU/GPU performans profilleme ve görselleştirme kütüphanesine C++ sıralama algoritmalarını geliştirip optimize ederek katkı verdim."
        }
      },
      "responsibilities": {
        "en": [
          "Implemented and optimized ordering algorithms in a research software codebase.",
          "Compared execution costs across sparse workloads; the existing project evaluation reports a 6x ordering speedup."
        ],
        "tr": [
          "Implemented and optimized ordering algorithms in a research software codebase.",
          "Compared execution costs across sparse workloads; the existing project evaluation reports a 6x ordering speedup."
        ]
      },
      "kpis": [
        {
          "label": {
            "en": "recorded ordering speedup",
            "tr": "recorded ordering speedup"
          },
          "value": "6x"
        }
      ],
      "details": [
        {
          "title": {
            "en": "Algorithm engineering",
            "tr": "Algorithm engineering"
          },
          "paragraphs": {
            "en": [
              "The contribution focuses on ordering costs, sparse representations and measured execution time. The reported 6x result comes from the existing project evaluation and is not a universal CPU/GPU speedup."
            ],
            "tr": [
              "The contribution focuses on ordering costs, sparse representations and measured execution time. The reported 6x result comes from the existing project evaluation and is not a universal CPU/GPU speedup."
            ]
          }
        }
      ],
      "images": [],
      "concise": {
        "features": [
          "Implemented ordering algorithms and profiled sparse workloads.",
          "Compared algorithm behavior within the research library."
        ],
        "result": "Recorded ordering speedup: 6× in the project evaluation.",
        "features_tr": [
          "Sıralama algoritmaları geliştirdim ve seyrek veri iş yüklerini profilledim.",
          "Araştırma kütüphanesi içinde algoritmaların davranışını karşılaştırdım."
        ],
        "result_tr": "Proje değerlendirmesinde kayıtlı sıralama hızlanması: 6×."
      }
    }
  },
  "recent": [
    {
      "id": "kth",
      "title": "KTH — How Language Models Read Graphs",
      "org": "KTH Royal Institute of Technology · Prof. Aristides Gionis",
      "description": "Research internship on graph reasoning in Llama-3.1-8B: controlled text encodings, algorithmic ground truth and reproducible GPU evaluation. The internship ended in September; a separate October research continuation is still at pilot stage.",
      "cover": "images/kth1.png",
      "tags": [
        "Python",
        "PyTorch",
        "Llama-3.1-8B",
        "NetworkX"
      ]
    },
    {
      "id": "advisu",
      "title": "adviSU — Academic Advising, Degree Audits and Scheduling",
      "org": "Independent project · Sabancı University curriculum",
      "description": "A bilingual academic adviser that combines official curriculum retrieval with deterministic degree audits and course scheduling. The chat explains evidence and calculated results; academic rules and timetable conflicts are checked in code.",
      "cover": "images/advisu1.png",
      "tags": [
        "Python",
        "FastAPI",
        "React",
        "TypeScript"
      ]
    },
    {
      "id": "atcha",
      "title": "Atcha — Shared Questions, Games and Memories",
      "org": "Independent mobile product",
      "description": "A Flutter application for two people to share questions, games, conversations and memories. The work combines understandable interaction states with server-authoritative updates, privacy boundaries and recovery from connection failures.",
      "cover": "images/atcha1.png",
      "tags": [
        "Flutter",
        "Dart",
        "Riverpod",
        "go_router"
      ]
    }
  ]
};
