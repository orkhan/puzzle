! function(e) {
    e.fn.extend({
        shufflepuzzle: function(i) {
            var t = {
                tilesH: 4,
                tilesV: 4,
                gap: !0,
                duration: 100,
                bgColor: "#fff",
                bgOpacity: 1,
                imgBgOpacity: .2,
                shuffleNum: 5,
                shuffleSpeed: 60,
                menuVisible: !0
            };
            i = e.extend(t, i);
            var a = Math.round(999999 * Math.random());
            return this.each(function() {
                function t() {
                    for (var i in n.menu_shuffle) v += "<li>" + i + "</li>";
                    for (var t = 0; t < n.menu_grid.length; t++) H += "<li>" + n.menu_grid[t] + "</li>";
                    for (var i in n.menu_image) b += "<li>" + i + "</li>";
                    var o = "",
                        u = "",
                        r = "";
                    n.menuNameShuffle && (o = "<li>" + n.menuNameShuffle + '<ul class="pz_shuffle' + a + '">' + v + "</ul></li>"), n.menuNameGrid && (u = "<li>" + n.menuNameGrid + '<ul class="pz_grid' + a + '">' + H + "</ul></li>"), n.menuNameImage && (r = "<li>" + n.menuNameImage + '<ul class="pz_img' + a + '">' + b + "</ul></li>"), e(_).width(n.width).height(n.height).css({
                        overflow: "hidden",
                        position: "relative",
                        padding: "0"
                    }), e(_).prepend('<div id="bg' + a + '"><img id="imgbg' + a + '" width="' + n.width + '" height="' + n.height + '" src="' + n.img_puzzle + '" /></div>'), n.menuVisible && e(_).prepend('<div id="menu' + a + '">' + '<ul id="puzzle-navigation">' + o + u + r + "</ul>" + "</div>"), e("ul.pz_shuffle" + a + " li").click(function() {
                        e(".img_title" + a).remove(), n.shuffleNum = n.menu_shuffle[e(this).text()], l()
                    }), e("ul.pz_grid" + a + " li").click(function() {
                        e(".img_title" + a).remove(), s = e(this).text().replace(/[^A-Za-z0-9#:;-]/g, "").split("x"), n.tilesV = parseInt(s[0]), n.tilesH = parseInt(s[1]), m = n.tilesV * n.tilesH, l()
                    }), e("ul.pz_img" + a + " li").click(function() {
                        n.img_puzzle != n.menu_image[e(this).text()] && (e(".img_title" + a).remove(), w.src = n.img_puzzle = n.menu_image[e(this).text()], e("#imgbg" + a).attr("src", n.img_puzzle), w.onload = function() {
                            l()
                        })
                    }), e(_).bind("selectstart", function() {
                        return !1
                    }).css({
                        "user-select": "none",
                        "-o-user-select": "none",
                        "-moz-user-select": "none",
                        "-khtml-user-select": "none",
                        "-webkit-user-select": "none"
                    }), e("#bg" + a).css({
                        position: "absolute",
                        overflow: "hidden",
                        "background-color": n.bgColor,
                        opacity: n.bgOpacity
                    }).bind("mousedown touchstart", function(e) {
                        var i = e || event;
                        i.preventDefault ? i.preventDefault() : i.returnValue = !1
                    }), e("#menu" + a).css({
                        height: "20px",
                        color: "white",
                        position: "absolute",
                        "z-index": 50
                    }), l()
                }

                function l() {
                    function i() {
                        H = Math.round(Math.random() * (m - 2));
                        var i = e("#img_num" + H + a).data().name;
                        for (g = !1; !g;) f != i && (i + 1 == d && 0 != d % n.tilesH || i - 1 == d && d % n.tilesH != n.tilesH - 1 ? (p = i, f = d, e("#img_num" + H + a).data("name", d).animate({
                            left: s + d % n.tilesH * Math.floor(n.width / n.tilesH) + "px"
                        }, n.shuffleSpeed, t), d = p, g = !0) : (i + n.tilesH == d || i - n.tilesH == d) && (p = i, f = d, e("#img_num" + H + a).data("name", d).animate({
                            top: v + Math.floor(d / n.tilesH) * Math.floor(n.height / n.tilesV) + "px"
                        }, n.shuffleSpeed, t), d = p, g = !0)), H = Math.round(Math.random() * (m - 2)), i = e("#img_num" + H + a).data().name;
                        h++
                    }

                    function t() {
                        h < n.shuffleNum && setTimeout(i, n.duration / 5)
                    }

                    function l() {
                        for (z = 0; m - 1 > z; z++)
                            if (0 == (e("#img_num" + z + a).data().etalon == e("#img_num" + z + a).data().name)) return !1;
                        return !0
                    }
                    for (clearTimeout(i), g = !1, d = m - 1, f = -1, p = d, o = [], u = [], e("#bg" + a).css({
                        "background-color": n.bgColor,
                        opacity: n.bgOpacity
                    }), e("#imgbg" + a).css({
                        opacity: n.imgBgOpacity
                    }), z = 0; m > z; z++) o.push(z), u.push(z);
                    h = 0;
                    var s = Math.floor((n.width - Math.floor(n.width / n.tilesH) * n.tilesH) / 2),
                        v = Math.floor((n.height - Math.floor(n.height / n.tilesV) * n.tilesV) / 2);
                    for (z = 0; z < n.tilesV; z++)
                        for (c = 0; c < n.tilesH; c++) e(_).prepend('<div class="img_title' + a + '" id="img_num' + h + a + '"></div>'), e("#img_num" + h + a).css({
                            background: "url(" + n.img_puzzle + ") -" + (c * Math.floor(n.width / n.tilesH) + s) + "px -" + (z * Math.floor(n.height / n.tilesV) + v) + "px no-repeat",
                            width: Math.floor(n.width / n.tilesH) - r + "px",
                            height: Math.floor(n.height / n.tilesV) - r + "px",
                            position: "absolute",
                            overflow: "hidden",
                            left: s + c * Math.floor(n.width / n.tilesH) + "px",
                            top: v + z * Math.floor(n.height / n.tilesV) + "px",
                            "z-index": 1
                        }).data({
                            name: o[h],
                            etalon: o[h]
                        }).bind("mousedown touchstart", function() {
                            function i() {
								$(".good_alert").show()
								$(".alert").fadeIn()
								$(".timer").removeClass("show")
								
								reset();
								clearInterval(timer);
								/*
                                jSuccess("Congratulations, you've won!", {
                                    InsideDiv: e("#Puzzle"),
                                    TimeShown: 3e3
                                })
								*/
                            }
                            e(this).data().name + 1 == d && 0 != d % n.tilesH || e(this).data().name - 1 == d && d % n.tilesH != n.tilesH - 1 ? (p = e(this).data().name, e(this).data("name", d).animate({
                                left: s + d % n.tilesH * Math.floor(n.width / n.tilesH) + "px"
                            }, n.duration), d = p) : (e(this).data().name + n.tilesH == d || e(this).data().name - n.tilesH == d) && (p = e(this).data().name, e(this).data("name", d).animate({
                                top: v + Math.floor(d / n.tilesH) * Math.floor(n.height / n.tilesV) + "px"
                            }, n.duration), d = p), l() && (e("#bg" + a).animate({
                                opacity: 1
                            }, n.duration), e("#imgbg" + a).animate({
                                opacity: 1
                            }, n.duration, function() {
                                e(".img_title" + a).css({
                                    "z-index": 0
                                })
                            }), setTimeout(i, n.duration + 50))
                        }), h++, h == m - 1 && (c = n.tilesH);
                    d = o[o[m - 1]];
                    var H = 0;
                    h = 0, 0 != n.shuffleNum && setTimeout(i, 100)
                }
                var n = i,
                    o = [],
                    u = [],
                    s = [],
                    m = n.tilesV * n.tilesH,
                    r = n.gap ? 1 : 0,
                    h = 0,
                    g = !1,
                    d = m - 1,
                    f = -1,
                    p = d,
                    c = 0,
                    z = 0,
                    _ = e(this),
                    v = "",
                    H = "",
                    b = "";
                n.menuNameShuffle = "Shuffle", n.menuNameGrid = "Grid", n.menuNameImage = "Image", n.menu_shuffle = {
                    Easy: 10,
                    Medium: 30,
                    Hard: 60
                }, n.menu_grid = ["3x3", "4x4", "5x5"], n.img_puzzle = "puzzle1.jpg" /*tpa=http://zzzpiu.com/envato/shufflepuzzle/js/img/puzzle1.jpg*/ , n.menu_image = {
                    Car: "54.png" /*tpa=http://zzzpiu.com/envato/shufflepuzzle/js/img/puzzle.jpg*/ ,
                    Image: "puzzle1.jpg" /*tpa=http://zzzpiu.com/envato/shufflepuzzle/js/img/puzzle1.jpg*/ ,
                    "Big Buck Bunny": "puzzle2.jpg" /*tpa=http://zzzpiu.com/envato/shufflepuzzle/js/img/puzzle2.jpg*/ ,
                    Sintel: "puzzle3.jpg" /*tpa=http://zzzpiu.com/envato/shufflepuzzle/js/img/puzzle3.jpg*/
                };
                var w = new Image;
                w.onload = function() {
                    n.width = this.width, n.height = this.height, t()
                }, w.src = n.img_puzzle
            })
        }
    })
}(jQuery);