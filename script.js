/* =========================================================
   DỮ LIỆU – nguồn: Giáo trình Lịch sử Đảng Cộng sản Việt Nam
   (Ban Tuyên giáo Trung ương). Mục nào chưa có trong giáo trình
   được đánh dấu "Cần bổ sung nguồn" để nhóm tự điền thêm.
   ========================================================= */
const CONGRESSES = [
  {
    id: "vii", roman: "VII", year: 1991,
    time: "24 – 27/6/1991", place: "Hà Nội",
    delegates: "1.176 đại biểu, đại diện cho trên 2 triệu đảng viên",
    context: "Sau hơn 4 năm đổi mới, đất nước cơ bản ổn định nhưng chưa ra khỏi khủng hoảng kinh tế - xã hội. Lạm phát giảm từ 393,3% (1988) xuống 67,4% (1990).",
    content: [
      "Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Cương lĩnh 1991): nêu 5 bài học lớn, 6 đặc trưng của xã hội XHCN và 7 phương hướng lớn.",
      "Thông qua Chiến lược ổn định và phát triển kinh tế - xã hội đến năm 2000 (mục tiêu: GDP năm 2000 gấp đôi năm 1990).",
      "Phát triển nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của Nhà nước theo định hướng XHCN."
    ],
    highlights: [
      "Lần đầu tiên giương cao ngọn cờ tư tưởng Hồ Chí Minh, lấy Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng.",
      "Bầu 146 ủy viên Trung ương, Bộ Chính trị 13 đồng chí; đồng chí Đỗ Mười làm Tổng Bí thư."
    ],
    meaning: "Được gọi là “Đại hội của trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết”, hoạch định con đường quá độ lên CNXH phù hợp đặc điểm Việt Nam. Sau Đại hội, Quốc hội thông qua Hiến pháp năm 1992.",
    short: { context: "Đã đổi mới hơn 4 năm, ổn định nhưng chưa ra khỏi khủng hoảng KT-XH", focus: "Cương lĩnh 1991; Chiến lược ổn định và phát triển KT-XH đến 2000", newPoint: "Lần đầu giương cao tư tưởng Hồ Chí Minh; kinh tế hàng hóa nhiều thành phần", meaning: "Hoạch định con đường quá độ lên CNXH ở Việt Nam" },
    tagline: "Cương lĩnh 1991 – định hình con đường quá độ"
  },
  {
    id: "viii", roman: "VIII", year: 1996,
    time: "28/6 – 1/7/1996", place: "Hà Nội",
    delegates: "1.198 đại biểu, đại diện cho hơn 2,1 triệu đảng viên",
    context: "Cách mạng khoa học - công nghệ phát triển cao hơn; CNXH hiện thực lâm vào thoái trào. Sau 10 năm đổi mới, Việt Nam phá được thế bao vây, cô lập nhưng vẫn là nước nghèo, kém phát triển. Lạm phát giảm từ 67,1% (1991) còn 12,7% (1995).",
    content: [
      "Tổng kết 10 năm đổi mới (1986 – 1996) và nêu 6 bài học chủ yếu.",
      "Xác định nước ta đã ra khỏi khủng hoảng KT-XH, chuyển sang thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa.",
      "Nêu 6 quan điểm về CNH, HĐH; coi xây dựng Đảng là nhiệm vụ then chốt."
    ],
    highlights: [
      "Bổ sung đặc trưng tổng quát về mục tiêu: “Dân giàu, nước mạnh, xã hội công bằng, văn minh”.",
      "Bầu đồng chí Đỗ Mười tiếp tục làm Tổng Bí thư."
    ],
    meaning: "Đánh dấu bước ngoặt, đưa đất nước sang thời kỳ mới – đẩy mạnh CNH, HĐH, xây dựng nước Việt Nam độc lập, dân chủ, giàu mạnh, xã hội công bằng, văn minh theo định hướng XHCN.",
    short: { context: "10 năm đổi mới; thoái trào của CNXH hiện thực; cách mạng KH-CN", focus: "Tổng kết 10 năm đổi mới; đẩy mạnh CNH, HĐH", newPoint: "Bổ sung đặc trưng tổng quát: dân giàu, nước mạnh, xã hội công bằng, văn minh", meaning: "Bước ngoặt đưa đất nước sang thời kỳ đẩy mạnh CNH, HĐH" },
    tagline: "Ra khỏi khủng hoảng – bước sang thời kỳ đẩy mạnh CNH, HĐH"
  },
  {
    id: "ix", roman: "IX", year: 2001,
    time: "19 – 22/4/2001", place: "Hà Nội",
    delegates: "1.168 đại biểu, đại diện cho hơn 2,2 triệu đảng viên",
    context: "Đại hội mở đầu thế kỷ XXI, trong bối cảnh cách mạng khoa học - công nghệ, kinh tế tri thức, toàn cầu hóa diễn ra mạnh mẽ. Sau 15 năm đổi mới, kinh tế chưa vững chắc, sức cạnh tranh thấp; chỉ tiêu tăng trưởng 9 – 10%/năm của Đại hội VIII không đạt.",
    content: [
      "Thông qua Chiến lược phát triển kinh tế - xã hội 2001 – 2010: đưa nước ta ra khỏi tình trạng kém phát triển, GDP năm 2010 gấp đôi năm 2000.",
      "Xác định rõ những nội dung cơ bản của Tư tưởng Hồ Chí Minh.",
      "Thực hiện nhất quán, lâu dài nền kinh tế thị trường định hướng XHCN; chủ động hội nhập kinh tế quốc tế."
    ],
    highlights: [
      "Coi kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát của thời kỳ quá độ.",
      "Bầu Ban Chấp hành Trung ương 150 ủy viên, Bộ Chính trị 15 đồng chí; đồng chí Nông Đức Mạnh làm Tổng Bí thư."
    ],
    meaning: "Tiếp tục đẩy mạnh đổi mới, đánh dấu bước trưởng thành về nhận thức, phát triển và cụ thể hóa Cương lĩnh 1991 trong những năm đầu thế kỷ XXI.",
    short: { context: "Đầu thế kỷ XXI; toàn cầu hóa, kinh tế tri thức; sau 15 năm đổi mới", focus: "Chiến lược KT-XH 2001 – 2010; kinh tế thị trường định hướng XHCN", newPoint: "Xác định nội dung cơ bản của Tư tưởng Hồ Chí Minh; mô hình kinh tế tổng quát", meaning: "Bước trưởng thành về nhận thức, cụ thể hóa Cương lĩnh 1991" },
    tagline: "Kinh tế thị trường định hướng XHCN – mô hình tổng quát"
  },
  {
    id: "x", roman: "X", year: 2006,
    time: "18 – 25/4/2006", place: "Hà Nội",
    delegates: "1.176 đại biểu, đại diện cho hơn 3,1 triệu đảng viên",
    context: "Đất nước đã trải qua 20 năm đổi mới, đạt thành tựu to lớn; thế và lực, uy tín quốc tế tăng nhiều. Tình hình quốc tế phức tạp, vừa có thời cơ lớn vừa có thách thức không thể xem thường.",
    content: [
      "Tổng kết 20 năm đổi mới, nêu 5 bài học.",
      "Bổ sung 2 đặc trưng mới của XHCN (so với Cương lĩnh 1991): dân chủ; có Nhà nước pháp quyền XHCN.",
      "Chủ đề: nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển."
    ],
    highlights: [
      "Cho phép đảng viên làm kinh tế tư nhân (kể cả tư bản tư nhân), nhưng phải tuân thủ Điều lệ Đảng và pháp luật.",
      "Lần đầu tiên đặt chú trọng hàng đầu nhiệm vụ then chốt là xây dựng, chỉnh đốn Đảng.",
      "Bầu 160 ủy viên chính thức và 21 ủy viên dự khuyết Trung ương; Bộ Chính trị 14 đồng chí; đồng chí Nông Đức Mạnh được bầu lại làm Tổng Bí thư."
    ],
    meaning: "Là dấu mốc quan trọng trong tiến trình đẩy mạnh CNH, HĐH; văn kiện là kết tinh trí tuệ, ý chí toàn Đảng, toàn dân quyết tâm đổi mới toàn diện, phát triển nhanh và bền vững.",
    short: { context: "20 năm đổi mới; thế và lực, uy tín quốc tế tăng; thời cơ đan xen thách thức", focus: "Xây dựng, chỉnh đốn Đảng; phát huy sức mạnh toàn dân tộc; đẩy mạnh đổi mới toàn diện", newPoint: "Đảng viên được làm kinh tế tư nhân; thêm 2 đặc trưng của XHCN", meaning: "Dấu mốc quan trọng đẩy mạnh CNH, HĐH, phát triển nhanh và bền vững" },
    tagline: "Đảng viên làm kinh tế tư nhân – chỉnh đốn Đảng hàng đầu"
  }
];

/* Thẻ "Bạn có biết?" (nguồn: giáo trình) */
const FACTS = [
  { tag: "Đại hội VII", title: "Lạm phát giảm mạnh", more: "Lạm phát năm 1988 là 393,3%, đến năm 1990 còn 67,4% (số liệu nêu tại phần Đại hội VII)." },
  { tag: "Đại hội VII", title: "Cương lĩnh 1991 có 6 đặc trưng XHCN", more: "Gồm: nhân dân lao động làm chủ; kinh tế phát triển cao; văn hóa tiên tiến, đậm đà bản sắc dân tộc; con người được giải phóng; các dân tộc bình đẳng, đoàn kết; hữu nghị, hợp tác với các nước." },
  { tag: "Đại hội VIII", title: "10 năm đổi mới, lạm phát còn 12,7%", more: "Lạm phát từ 67,1% năm 1991 giảm còn 12,7% năm 1995; Đại hội VIII nêu 6 bài học qua 10 năm đổi mới." },
  { tag: "Đại hội IX", title: "GDP gấp đôi sau 10 năm", more: "GDP từ 15,5 tỷ USD năm 1991 vượt hơn gấp đôi, đạt trên 35 tỷ USD năm 2000." },
  { tag: "Đại hội X", title: "Số đảng viên tăng lên hơn 3,1 triệu", more: "Đại hội IX đại diện cho hơn 2,2 triệu đảng viên; đến Đại hội X là hơn 3,1 triệu đảng viên." },
  { tag: "Cả 4 kỳ", title: "Ba Tổng Bí thư, bốn kỳ Đại hội", more: "Đỗ Mười được bầu tại Đại hội VII và tiếp tục tại Đại hội VIII; Nông Đức Mạnh được bầu tại Đại hội IX và tái cử tại Đại hội X." }
];

/* 15 câu quiz: answer = chỉ số đáp án đúng (0 = A, 1 = B, 2 = C, 3 = D) */
const QUIZ = [
  { q: "Đại hội VII của Đảng họp vào năm nào?", o: ["1986", "1991", "1996", "2001"], a: 1 },
  { q: "Văn kiện quan trọng nào được Đại hội VII thông qua?", o: ["Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH", "Cương lĩnh chính trị đầu tiên", "Luận cương chính trị", "Chính cương vắn tắt"], a: 0 },
  { q: "Ai được Đại hội VII bầu làm Tổng Bí thư?", o: ["Nguyễn Văn Linh", "Đỗ Mười", "Lê Khả Phiêu", "Nông Đức Mạnh"], a: 1 },
  { q: "Tại Đại hội VII, lần đầu tiên Đảng khẳng định lấy gì làm nền tảng tư tưởng?", o: ["Chỉ chủ nghĩa Mác - Lênin", "Chỉ tư tưởng Hồ Chí Minh", "Chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh", "Chủ nghĩa dân tộc"], a: 2 },
  { q: "Đại hội VIII họp trong khoảng thời gian nào?", o: ["24 – 27/6/1991", "19 – 22/4/2001", "18 – 25/4/2006", "28/6 – 1/7/1996"], a: 3 },
  { q: "Đại hội VIII nhận định thế nào về tình hình đất nước sau 10 năm đổi mới?", o: ["Đã ra khỏi khủng hoảng KT-XH nhưng một số mặt chưa vững chắc", "Vẫn đang khủng hoảng nghiêm trọng", "Đã trở thành nước công nghiệp", "Đã hoàn thành CNH, HĐH"], a: 0 },
  { q: "Đặc trưng tổng quát được Đại hội VIII bổ sung là gì?", o: ["Độc lập, tự do, hạnh phúc", "Dân chủ, công bằng, văn minh", "Dân giàu, nước mạnh, xã hội công bằng, văn minh", "Kinh tế phát triển, văn hóa tiên tiến"], a: 2 },
  { q: "Đại hội VIII đánh dấu bước ngoặt đưa đất nước sang thời kỳ nào?", o: ["Chuẩn bị tiền đề cho CNH", "Bao cấp tập trung", "Kháng chiến chống Mỹ", "Đẩy mạnh công nghiệp hóa, hiện đại hóa"], a: 3 },
  { q: "Đại hội VIII nêu mấy bài học chủ yếu qua 10 năm đổi mới?", o: ["4 bài học", "5 bài học", "6 bài học", "7 bài học"], a: 2 },
  { q: "Ai được bầu làm Tổng Bí thư tại Đại hội IX (2001)?", o: ["Đỗ Mười", "Nông Đức Mạnh", "Lê Khả Phiêu", "Nguyễn Phú Trọng"], a: 1 },
  { q: "Đại hội IX thông qua Chiến lược phát triển kinh tế - xã hội cho giai đoạn nào?", o: ["2001 – 2010", "1991 – 2000", "2006 – 2015", "1996 – 2005"], a: 0 },
  { q: "Đại hội IX coi mô hình kinh tế tổng quát của thời kỳ quá độ là gì?", o: ["Kinh tế kế hoạch hóa tập trung", "Kinh tế tự cung tự cấp", "Kinh tế tư bản chủ nghĩa", "Kinh tế thị trường định hướng XHCN"], a: 3 },
  { q: "Khi họp Đại hội X (2006), đất nước đã trải qua bao nhiêu năm đổi mới?", o: ["10 năm", "15 năm", "20 năm", "30 năm"], a: 2 },
  { q: "Quan điểm mới nổi bật của Đại hội X về đảng viên là gì?", o: ["Cho phép đảng viên làm kinh tế tư nhân (tuân thủ Điều lệ và pháp luật)", "Cấm đảng viên tham gia kinh doanh", "Bỏ chế độ sinh hoạt đảng", "Không yêu cầu đảng viên gương mẫu"], a: 0 },
  { q: "Lần đầu tiên, Đại hội X đặt chú trọng hàng đầu nhiệm vụ nào?", o: ["Mở rộng đối ngoại", "Xây dựng, chỉnh đốn Đảng", "Phát triển kinh tế biển", "Cải cách hành chính"], a: 1 }
];

/* ---------- Tiện ích ---------- */
const $ = (sel) => document.querySelector(sel);
const html = (strings, ...v) => strings.reduce((s, t, i) => s + t + (v[i] ?? ""), "");

/* ---------- Navigation ---------- */
$("#startBtn").addEventListener("click", () => $("#timeline").scrollIntoView({ behavior: "smooth" }));
const toggle = $(".nav-toggle"), menu = $("#menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", () => menu.classList.remove("open")); // đóng menu mobile sau khi chọn

/* ---------- 2. Timeline: bấm mốc → hiện thông tin tương ứng ---------- */
const tlNodes = $("#tlNodes"), tlDetail = $("#tlDetail");
tlNodes.innerHTML = CONGRESSES.map((c) => html`
  <button data-id="${c.id}" role="tab"><span class="dot">${c.roman}</span><strong>${c.year}</strong><small>Đại hội ${c.roman}</small></button>`).join("");

function showTimeline(id) {
  const c = CONGRESSES.find((x) => x.id === id);
  tlNodes.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("on", b.dataset.id === id);
    b.setAttribute("aria-selected", b.dataset.id === id);
  });
  tlDetail.innerHTML = html`
    <h3>${c.year} – Đại hội ${c.roman}</h3>
    <p><strong>Thời gian:</strong> ${c.time} · <strong>Địa điểm:</strong> ${c.place}</p>
    <p>${c.short.focus}.</p>
    <p><em>${c.tagline}</em></p>
    <button class="link-btn" data-go="${c.id}">Xem nội dung chi tiết</button>`;
}
tlNodes.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) showTimeline(b.dataset.id); });
tlDetail.addEventListener("click", (e) => {
  const b = e.target.closest("[data-go]");
  if (b) document.getElementById("card-" + b.dataset.go).scrollIntoView({ behavior: "smooth" });
});
showTimeline("vii"); // mặc định mở mốc đầu tiên

/* ---------- 3. Card nội dung từng Đại hội ---------- */
$("#cards").innerHTML = CONGRESSES.map((c) => html`
  <article class="card" id="card-${c.id}">
    <h3>Đại hội ${c.roman} (${c.year})</h3>
    <div class="meta">
      <span><strong>Thời gian:</strong> ${c.time}</span>
      <span><strong>Địa điểm:</strong> ${c.place} <span class="todo">Cần bổ sung nguồn: địa điểm cụ thể</span></span>
      <span><strong>Đại biểu:</strong> ${c.delegates}</span>
    </div>
    <h4>Bối cảnh</h4><p>${c.context}</p>
    <h4>Nội dung / chủ trương chính</h4><ul>${c.content.map((t) => `<li>${t}</li>`).join("")}</ul>
    <h4>Điểm nổi bật</h4><ul>${c.highlights.map((t) => `<li>${t}</li>`).join("")}</ul>
    <h4>Ý nghĩa</h4><p>${c.meaning}</p>
  </article>`).join("");

/* ---------- 4. Bảng so sánh ---------- */
$("#cmpTable").innerHTML = html`
  <thead><tr><th>Năm</th><th>Bối cảnh</th><th>Nội dung trọng tâm</th><th>Điểm mới</th><th>Ý nghĩa</th></tr></thead>
  <tbody>${CONGRESSES.map((c) => `<tr><th>${c.year}<br>Đại hội ${c.roman}</th><td>${c.short.context}</td><td>${c.short.focus}</td><td>${c.short.newPoint}</td><td>${c.short.meaning}</td></tr>`).join("")}</tbody>`;

/* ---------- 5. Dòng thời gian VII → X ---------- */
$("#flow").innerHTML = CONGRESSES.map((c, i) => html`
  <div class="flow-item"><b>${c.roman}</b><span>${c.year}</span><p>${c.tagline}</p></div>${i < CONGRESSES.length - 1 ? '<div class="arrow" aria-hidden="true">→</div>' : ""}`).join("");

/* ---------- 6. Quiz ---------- */
const quizBox = $("#quizBox");
let qi = 0, correct = 0, answered = false;

function renderQuestion() {
  const item = QUIZ[qi];
  answered = false;
  quizBox.innerHTML = html`
    <div class="q-top"><span>Câu ${qi + 1}/${QUIZ.length}</span><span>Đúng: ${correct}</span></div>
    <div class="bar"><i style="width:${(qi / QUIZ.length) * 100}%"></i></div>
    <div class="q-text">${item.q}</div>
    ${item.o.map((t, i) => `<button class="opt" data-i="${i}"><b>${"ABCD"[i]}.</b><span>${t}</span></button>`).join("")}
    <div class="q-actions"><button class="btn" id="nextBtn" disabled>${qi === QUIZ.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}</button></div>`;
}

// Chọn đáp án: khóa các lựa chọn, tô màu đúng/sai, mở nút "Câu tiếp theo"
quizBox.addEventListener("click", (e) => {
  const opt = e.target.closest(".opt");
  if (opt && !answered) {
    answered = true;
    const pick = +opt.dataset.i, right = QUIZ[qi].a;
    if (pick === right) correct++;
    quizBox.querySelectorAll(".opt").forEach((b, i) => {
      b.disabled = true;
      if (i === right) b.classList.add("ok");
      else if (i === pick) b.classList.add("bad");
    });
    $("#nextBtn").disabled = false;
  }
  if (e.target.id === "nextBtn" && answered) { qi++; qi < QUIZ.length ? renderQuestion() : renderResult(); }
  if (e.target.id === "retryBtn") { qi = 0; correct = 0; renderQuestion(); }
});

function renderResult() {
  const wrong = QUIZ.length - correct;
  const score = ((correct / QUIZ.length) * 10).toFixed(1); // thang điểm 10
  const s = +score;
  const comment = s >= 9 ? "Xuất sắc! Bạn nắm rất vững nội dung bốn kỳ Đại hội."
    : s >= 7 ? "Khá tốt! Hãy xem lại bảng so sánh để nhớ chắc phần còn thiếu."
    : s >= 5 ? "Đạt yêu cầu. Nên ôn lại phần nội dung từng Đại hội."
    : "Cần cố gắng thêm. Hãy đọc lại timeline và các thẻ Đại hội rồi làm lại.";
  quizBox.innerHTML = html`
    <div class="result"><h3>Kết quả của bạn</h3>
      <div class="score-grid"><div><b>${correct}</b>Câu đúng</div><div><b>${wrong}</b>Câu sai</div><div><b>${score}</b>Điểm (/10)</div></div>
      <p>${comment}</p><button class="btn" id="retryBtn">Làm lại</button></div>`;
}
renderQuestion();

/* ---------- 7. Bạn có biết? (nút Xem thêm / Thu gọn) ---------- */
$("#factGrid").innerHTML = FACTS.map((f) => html`
  <div class="fact"><span class="tag">${f.tag}</span><h3>${f.title}</h3>
    <button class="link-btn" aria-expanded="false">Xem thêm</button><div class="more">${f.more}</div></div>`).join("");
$("#factGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".link-btn");
  if (!btn) return;
  const open = btn.parentElement.classList.toggle("open");
  btn.textContent = open ? "Thu gọn" : "Xem thêm";
  btn.setAttribute("aria-expanded", open);
});

/* ---------- Hiệu ứng cuộn nhẹ + tô sáng mục menu hiện tại ---------- */
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("show"); io.unobserve(en.target); }
}), { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const links = [...document.querySelectorAll("#menu a")];
const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach((s) => spy.observe(s));
