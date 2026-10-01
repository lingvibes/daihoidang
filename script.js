/* =========================================================
   DỮ LIỆU – nguồn chính: file "Bản trình bày chi tiết: Tìm hiểu
   Đại hội VII, VIII, IX, X"; mục nào file không có thì giữ từ
   giáo trình Lịch sử Đảng (Ban Tuyên giáo TW) hoặc đánh dấu
   "Cần bổ sung nguồn" để nhóm tự điền thêm.
   ========================================================= */
const CONGRESSES = [
  {
    id: "vii", roman: "VII", year: 1991,
    time: "24 – 27/6/1991", place: "Hà Nội",
    delegates: "1.176 đại biểu, đại diện cho trên 2 triệu đảng viên",
    context: "Quốc tế: hệ thống các nước XHCN ở Liên Xô và Đông Âu lâm vào khủng hoảng trầm trọng và sụp đổ; trật tự hai cực Ianta kết thúc, chiến tranh lạnh chấm dứt; các thế lực thù địch tăng cường chống phá chủ nghĩa Mác - Lênin và Đảng Cộng sản. Trong nước: đổi mới từ Đại hội VI (1986) đạt thành tựu bước đầu nhưng chưa thoát khỏi khủng hoảng KT-XH, lạm phát còn cao, đời sống nhân dân nhiều khó khăn.",
    content: [
      "Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (Cương lĩnh 1991), phác họa 6 đặc trưng cơ bản của xã hội XHCN.",
      "Khẳng định Đảng lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động.",
      "Thông qua Chiến lược ổn định và phát triển KT-XH đến năm 2000: ra khỏi khủng hoảng, ổn định KT-XH, vượt qua tình trạng nước nghèo và kém phát triển.",
      "Kinh tế: trọng tâm số một là kiềm chế, đẩy lùi lạm phát; xóa bỏ cơ chế tập trung quan liêu, bao cấp, bước đầu vận hành nền kinh tế hàng hóa nhiều thành phần theo cơ chế thị trường.",
      "Nông nghiệp: tập trung an ninh lương thực, phát triển mạnh kinh tế hộ gia đình (kế thừa “Khoán 10”). Công nghiệp: tiếp tục 3 chương trình kinh tế lớn (lương thực - thực phẩm, hàng tiêu dùng, hàng xuất khẩu).",
      "Chính trị - xã hội: nhấn mạnh đoàn kết toàn Đảng, toàn dân, dân tộc và quốc tế. Đối ngoại: đa phương hóa, đa dạng hóa để phá thế bị bao vây cấm vận."
    ],
    highlights: [
      "Cương lĩnh 1991 và khẳng định nền tảng tư tưởng Mác - Lênin, tư tưởng Hồ Chí Minh – bước phát triển đặc biệt quan trọng trong nhận thức lý luận của Đảng.",
      "Bầu đồng chí Đỗ Mười làm Tổng Bí thư; 146 ủy viên Trung ương, Bộ Chính trị 13 đồng chí."
    ],
    meaning: "Là Đại hội của “trí tuệ - đổi mới, dân chủ - kỷ cương - đoàn kết”, giữ vững định hướng XHCN trong hoàn cảnh quốc tế cực kỳ sóng gió, vạch ra cương lĩnh đúng đắn dẫn dắt đất nước. Sau Đại hội, Quốc hội thông qua Hiến pháp năm 1992.",
    short: { context: "Liên Xô, Đông Âu sụp đổ; đổi mới từ 1986 nhưng chưa thoát khủng hoảng KT-XH, lạm phát còn cao", focus: "Cương lĩnh 1991; Chiến lược ổn định và phát triển KT-XH đến 2000", newPoint: "Khẳng định Mác - Lênin và tư tưởng Hồ Chí Minh là nền tảng tư tưởng; kinh tế hàng hóa nhiều thành phần theo cơ chế thị trường", meaning: "Giữ vững định hướng XHCN trong hoàn cảnh quốc tế sóng gió" },
    tagline: "Cương lĩnh 1991 – định hình con đường quá độ"
  },
  {
    id: "viii", roman: "VIII", year: 1996,
    time: "28/6 – 1/7/1996", place: "Hà Nội",
    delegates: "1.198 đại biểu, đại diện cho hơn 2,1 triệu đảng viên",
    context: "Quốc tế: nguy cơ chiến tranh thế giới bị đẩy lùi nhưng xung đột cục bộ, sắc tộc, tôn giáo vẫn tiếp diễn; cách mạng khoa học công nghệ phát triển mạnh, thúc đẩy toàn cầu hóa. Trong nước: sau 10 năm đổi mới, đất nước cơ bản thoát khỏi khủng hoảng KT-XH nhưng phát triển chưa vững chắc, hệ thống chính trị còn nhược điểm, kinh tế còn tụt hậu so với khu vực.",
    content: [
      "Nhận định đã hoàn thành cơ bản nhiệm vụ chặng đường đầu của thời kỳ quá độ; chuyển đất nước sang thời kỳ đẩy mạnh CNH, HĐH.",
      "Mục tiêu “Dân giàu, nước mạnh, xã hội công bằng, văn minh”; phấn đấu đến năm 2020 cơ bản trở thành nước công nghiệp.",
      "Tiếp tục phát triển kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước, theo định hướng XHCN; bắt đầu thu hút mạnh vốn FDI.",
      "Nông nghiệp: CNH, HĐH nông nghiệp, nông thôn; chuyển từ độc canh cây lúa sang nông nghiệp toàn diện gắn với công nghiệp chế biến nông - lâm - thủy sản.",
      "Công nghiệp: xây dựng một số công trình then chốt (dầu khí, năng lượng, xi măng, thép); khởi xướng Khu công nghiệp, Khu chế xuất.",
      "Chính trị - xã hội: mở rộng dân chủ XHCN, kiện toàn Quốc hội và bộ máy hành chính nhà nước; lần đầu đặt giáo dục - đào tạo và khoa học - công nghệ là quốc sách hàng đầu."
    ],
    highlights: [
      "Đánh dấu bước ngoặt chuyển đất nước sang thời kỳ đẩy mạnh CNH, HĐH.",
      "Đồng chí Đỗ Mười tiếp tục làm Tổng Bí thư (đến năm 1997, đồng chí Lê Khả Phiêu thay thế).",
      "Tổng kết 10 năm đổi mới (1986 – 1996) và nêu 6 bài học chủ yếu."
    ],
    meaning: "Có ý nghĩa quyết định trong việc tạo đà đưa đất nước bước vào kỷ nguyên CNH, HĐH, gắn phát triển kinh tế với an ninh quốc phòng.",
    short: { context: "Sau 10 năm đổi mới, cơ bản thoát khủng hoảng KT-XH nhưng phát triển chưa vững chắc, còn tụt hậu so với khu vực", focus: "Đẩy mạnh CNH, HĐH; mục tiêu dân giàu, nước mạnh, xã hội công bằng, văn minh", newPoint: "Chuyển sang thời kỳ CNH, HĐH; thu hút mạnh FDI; giáo dục - đào tạo và KH-CN là quốc sách hàng đầu", meaning: "Bước ngoặt tạo đà bước vào kỷ nguyên CNH, HĐH" },
    tagline: "Thoát khủng hoảng – bước sang thời kỳ đẩy mạnh CNH, HĐH"
  },
  {
    id: "ix", roman: "IX", year: 2001,
    time: "19 – 22/4/2001", place: "Hà Nội",
    delegates: "1.168 đại biểu, đại diện cho hơn 2,2 triệu đảng viên",
    context: "Quốc tế: nhân loại bước vào thế kỷ XXI; kinh tế tri thức và toàn cầu hóa mang lại cả thời cơ lẫn thách thức lớn. Trong nước: 15 năm đổi mới đạt thành tựu quan trọng nhưng kinh tế phát triển chưa bền vững, sức cạnh tranh thấp, đối mặt nguy cơ chệch hướng XHCN và tham nhũng.",
    content: [
      "Chính thức xác định phát triển kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ.",
      "Chiến lược KT-XH 2001 – 2010: đưa GDP năm 2010 gấp đôi năm 2000, tạo nền tảng để đến 2020 cơ bản trở thành nước công nghiệp.",
      "Mở rộng cửa hội nhập quốc tế (Hiệp định Thương mại Song phương Việt - Mỹ BTA ký năm 2000, có hiệu lực 2001).",
      "Nông nghiệp: giảm tỷ trọng trong GDP nhưng tăng giá trị tuyệt đối; chuyển đổi cơ cấu cây trồng, vật nuôi; phát triển kinh tế trang trại, sản xuất hàng hóa quy mô lớn.",
      "Công nghiệp: ưu tiên công nghệ thông tin, viễn thông, công nghệ cao; tỷ trọng công nghiệp và dịch vụ trong GDP vượt nông nghiệp.",
      "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; bỏ qua chế độ TBCN là bỏ qua sự thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN nhưng kế thừa thành tựu khoa học công nghệ nhân loại; động lực chủ yếu là đại đoàn kết toàn dân."
    ],
    highlights: [
      "Lần đầu tiên Đảng định danh chính thức mô hình “Kinh tế thị trường định hướng xã hội chủ nghĩa”.",
      "Xác định rõ những nội dung cơ bản của Tư tưởng Hồ Chí Minh.",
      "Bầu đồng chí Nông Đức Mạnh làm Tổng Bí thư; Ban Chấp hành Trung ương 150 ủy viên, Bộ Chính trị 15 đồng chí."
    ],
    meaning: "Là Đại hội “Phát huy sức mạnh toàn dân tộc, tiếp tục đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá, xây dựng và bảo vệ Tổ quốc Việt Nam XHCN”; đánh dấu bước trưởng thành vượt bậc trong tư duy kinh tế của Đảng.",
    short: { context: "Bước vào thế kỷ XXI; kinh tế tri thức, toàn cầu hóa; 15 năm đổi mới nhưng kinh tế chưa bền vững, sức cạnh tranh thấp", focus: "Chiến lược KT-XH 2001 – 2010; kinh tế thị trường định hướng XHCN; đại đoàn kết toàn dân", newPoint: "Lần đầu định danh mô hình kinh tế thị trường định hướng XHCN; ưu tiên CNTT, viễn thông, công nghệ cao", meaning: "Bước trưởng thành vượt bậc trong tư duy kinh tế của Đảng" },
    tagline: "Kinh tế thị trường định hướng XHCN – mô hình tổng quát"
  },
  {
    id: "x", roman: "X", year: 2006,
    time: "18 – 25/4/2006", place: "Hà Nội",
    delegates: "1.176 đại biểu, đại diện cho hơn 3,1 triệu đảng viên",
    context: "Quốc tế: hòa bình, hợp tác, phát triển vẫn là xu thế lớn, toàn cầu hóa kinh tế tạo cơ hội lớn; Việt Nam đang chuẩn bị gia nhập WTO. Trong nước: kỷ niệm 20 năm đổi mới, vị thế và lực lượng của đất nước nâng cao rõ rệt; nhưng thách thức tụt hậu kinh tế và tệ quan liêu, tham nhũng vẫn là vấn đề lớn.",
    content: [
      "Đúc kết 20 năm đổi mới, rút ra 5 bài học: kiên định mục tiêu độc lập dân tộc và CNXH; đổi mới toàn diện, đồng bộ; đổi mới vì lợi ích nhân dân; phát huy nội lực kết hợp ngoại lực; nâng cao năng lực lãnh đạo của Đảng.",
      "Chính thức cho phép đảng viên làm kinh tế tư nhân (kể cả tư bản tư nhân) không giới hạn quy mô; khẳng định kinh tế tư nhân là một động lực quan trọng của nền kinh tế.",
      "Chú trọng kết hợp tăng trưởng kinh tế với tiến bộ, công bằng xã hội; đổi mới hệ thống chính trị đồng bộ với đổi mới kinh tế.",
      "Kinh tế: hội nhập sâu rộng, gia nhập WTO cuối năm 2006. Công nghiệp: gắn CNH, HĐH với kinh tế tri thức, đẩy mạnh công nghiệp xuất khẩu, đặt vấn đề xây dựng công nghiệp hỗ trợ. Nông nghiệp: hướng tới nông nghiệp sinh thái, sạch, ứng dụng công nghệ sinh học.",
      "Đặt phòng chống tham nhũng, lãng phí thành một trong những nhiệm vụ cấp bách; tăng cường kiểm tra, giám sát trong Đảng."
    ],
    highlights: [
      "Điểm đột phá: cho phép đảng viên làm kinh tế tư nhân.",
      "Lần đầu tiên đặt chú trọng hàng đầu nhiệm vụ then chốt là xây dựng, chỉnh đốn Đảng; bổ sung 2 đặc trưng mới của XHCN (dân chủ; có Nhà nước pháp quyền XHCN).",
      "Đồng chí Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư; 160 ủy viên chính thức, 21 ủy viên dự khuyết, Bộ Chính trị 14 đồng chí."
    ],
    meaning: "Với chủ đề “Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển”, Đại hội X đã tháo gỡ nhiều “nút thắt” về lý luận, thúc đẩy hội nhập quốc tế sâu rộng.",
    short: { context: "20 năm đổi mới, vị thế tăng; chuẩn bị gia nhập WTO; còn thách thức tụt hậu, quan liêu, tham nhũng", focus: "Đúc kết 5 bài học 20 năm đổi mới; kết hợp tăng trưởng với công bằng xã hội; đổi mới hệ thống chính trị", newPoint: "Cho phép đảng viên làm kinh tế tư nhân; phòng chống tham nhũng, lãng phí là nhiệm vụ cấp bách", meaning: "Tháo gỡ nhiều nút thắt lý luận, thúc đẩy hội nhập quốc tế sâu rộng" },
    tagline: "Đảng viên làm kinh tế tư nhân – chỉnh đốn Đảng hàng đầu"
  }
];

/* Thẻ "Bạn có biết?" */
const FACTS = [
  { tag: "Đại hội VII", title: "Từ thiếu ăn đến xuất khẩu gạo", more: "Nhờ kế thừa nền tảng “Khoán 10” (1988), Đại hội VII định hướng phát triển mạnh kinh tế hộ gia đình ở nông thôn. Từ chỗ thiếu ăn, Việt Nam bắt đầu vươn lên trở thành nước xuất khẩu gạo." },
  { tag: "Đại hội VII", title: "Cương lĩnh 1991 có 6 đặc trưng XHCN", more: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH phác họa 6 đặc trưng cơ bản của xã hội XHCN mà nhân dân ta xây dựng." },
  { tag: "Đại hội VIII", title: "Từ độc canh cây lúa đến nông nghiệp toàn diện", more: "Đại hội VIII chuyển hướng từ độc canh cây lúa sang phát triển nông nghiệp toàn diện (chăn nuôi, lâm nghiệp, ngư nghiệp) gắn với công nghiệp chế biến nông - lâm - thủy sản để tăng giá trị xuất khẩu." },
  { tag: "Đại hội IX", title: "Mục tiêu: GDP năm 2010 gấp đôi năm 2000", more: "Chiến lược KT-XH 2001 – 2010 đặt mục tiêu đưa GDP năm 2010 lên gấp đôi năm 2000, tạo nền tảng để đến 2020 cơ bản trở thành nước công nghiệp." },
  { tag: "Đại hội X", title: "Số đảng viên tăng lên hơn 3,1 triệu", more: "Đại hội IX đại diện cho hơn 2,2 triệu đảng viên; đến Đại hội X là hơn 3,1 triệu đảng viên." },
  { tag: "Cả 4 kỳ", title: "Hai Tổng Bí thư được bầu qua bốn kỳ Đại hội", more: "Đỗ Mười được bầu tại Đại hội VII và tiếp tục tại Đại hội VIII (đến năm 1997, đồng chí Lê Khả Phiêu thay thế); Nông Đức Mạnh được bầu tại Đại hội IX và tiếp tục tại Đại hội X." }
];

/* 15 câu quiz: answer = chỉ số đáp án đúng (0 = A, 1 = B, 2 = C, 3 = D) */
const QUIZ = [
  { q: "Đại hội VII của Đảng họp vào năm nào?", o: ["1986", "1991", "1996", "2001"], a: 1 },
  { q: "Văn kiện quan trọng nào được Đại hội VII thông qua?", o: ["Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH", "Cương lĩnh chính trị đầu tiên", "Luận cương chính trị", "Chính cương vắn tắt"], a: 0 },
  { q: "Ai được Đại hội VII bầu làm Tổng Bí thư?", o: ["Nguyễn Văn Linh", "Đỗ Mười", "Lê Khả Phiêu", "Nông Đức Mạnh"], a: 1 },
  { q: "Đại hội VII khẳng định Đảng lấy gì làm nền tảng tư tưởng, kim chỉ nam cho hành động?", o: ["Chỉ chủ nghĩa Mác - Lênin", "Chỉ tư tưởng Hồ Chí Minh", "Chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh", "Chủ nghĩa dân tộc"], a: 2 },
  { q: "Đại hội VIII họp trong khoảng thời gian nào?", o: ["24 – 27/6/1991", "19 – 22/4/2001", "18 – 25/4/2006", "28/6 – 1/7/1996"], a: 3 },
  { q: "Đại hội VIII nhận định thế nào về tình hình đất nước sau 10 năm đổi mới?", o: ["Cơ bản thoát khỏi khủng hoảng KT-XH nhưng phát triển chưa vững chắc", "Vẫn đang khủng hoảng nghiêm trọng", "Đã trở thành nước công nghiệp", "Đã hoàn thành CNH, HĐH"], a: 0 },
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
      <span><strong>Địa điểm:</strong> ${c.place} <span class="todo"></span></span>
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