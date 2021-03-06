var resultsName = "";
(function(n) {
    n.fn.extend({
        cronGen: function() {
            var nt = n("<div/>", {
                    id: "CronContainer",
                    style: "display:none;width:300px;height:300px;"
                }),
                g = n("<div/>", {
                    id: "CronGenMainDiv",
                    style: "width:480px;height:270px;"
                }),
                e = n("<ul/>", {
                    "class": "nav nav-tabs",
                    id: "CronGenTabs"
                }),
                b, a, v, s, y, k, r, h, u, i, c, l, f;
            n("<li/>", {
                "class": "active"
            }).html(n('<a id="MinutesTab" href="#Minutes">Minutes<\/a>')).appendTo(e), n("<li/>").html(n('<a id="HourlyTab" href="#Hourly">Hourly<\/a>')).appendTo(e), n("<li/>").html(n('<a id="DailyTab" href="#Daily">Daily<\/a>')).appendTo(e), n("<li/>").html(n('<a id="WeeklyTab" href="#Weekly">Weekly<\/a>')).appendTo(e), n("<li/>").html(n('<a id="MonthlyTab" href="#Monthly">Monthly<\/a>')).appendTo(e), n("<li/>").html(n('<a id="YearlyTab" href="#Yearly">Yearly<\/a>')).appendTo(e), n(e).appendTo(g);
            var tt = n("<div/>", {
                    "class": "container-fluid",
                    "style": "margin-top:10px"
                }),
                it = n("<div/>", {
                    "class": "row-fluid"
                }),
                rt = n("<div/>", {
                    "class": "span12"
                }),
                o = n("<div/>", {
                    "class": "tab-content"
                }),
                w = n("<div/>", {
                    "class": "tab-pane active",
                    id: "Minutes"
                });
            n(w).append("Every&nbsp;"), n("<input/>", {
                id: "MinutesInput",
                type: "text",
                value: "1",
                style: "width: 40px"
            }).appendTo(w), n(w).append("&nbsp;minute(s)"), n(w).appendTo(o), b = n("<div/>", {
                "class": "tab-pane",
                id: "Hourly"
            }), a = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "1",
                name: "HourlyRadio",
                checked: "checked"
            }).appendTo(a), n(a).append("&nbsp;Every&nbsp;"), n("<input/>", {
                id: "HoursInput",
                type: "text",
                value: "1",
                style: "width: 40px"
            }).appendTo(a), n(a).append("&nbsp;hour(s)"), n(a).appendTo(b), v = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "2",
                name: "HourlyRadio"
            }).appendTo(v), n(v).append("&nbsp;At&nbsp;"), n(v).append('<select id="AtHours" class="hours" style="width: 60px"><\/select>'), n(v).append('<select id="AtMinutes" class="minutes" style="width: 60px"><\/select>'), n(v).appendTo(b), n(b).appendTo(o), s = n("<div/>", {
                "class": "tab-pane",
                id: "Daily"
            }), y = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "1",
                name: "DailyRadio",
                checked: "checked"
            }).appendTo(y), n(y).append("&nbsp;Every&nbsp;"), n("<input/>", {
                id: "DaysInput",
                type: "text",
                value: "1",
                style: "width: 40px"
            }).appendTo(y), n(y).append("&nbsp;day(s)"), n(y).appendTo(s), k = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "2",
                name: "DailyRadio"
            }).appendTo(k), n(k).append("&nbsp;Every week day&nbsp;"), n(k).appendTo(s), n(s).append("Start time&nbsp;"), n(s).append('<select id="DailyHours" class="hours" style="width: 60px"><\/select>'), n(s).append('<select id="DailyMinutes" class="minutes" style="width: 60px"><\/select>'), n(s).appendTo(o);
            var p = n("<div/>", {
                    "class": "tab-pane",
                    id: "Weekly"
                }),
                d = n("<div/>", {
                    "class": "well well-small"
                }),
                t = n("<div/>", {
                    "class": "span6 col-sm-6"
                });
            n("<input/>", {
                type: "checkbox",
                value: "MON"
            }).appendTo(t), n(t).append("&nbsp;Monday<br />"), n("<input/>", {
                type: "checkbox",
                value: "TUE"
            }).appendTo(t), n(t).append("&nbsp;Tuesday<br />"), n("<input/>", {
                type: "checkbox",
                value: "WED"
            }).appendTo(t), n(t).append("&nbsp;Wednesday<br />"), n("<input/>", {
                type: "checkbox",
                value: "THU"
            }).appendTo(t), n(t).append("&nbsp;Thursday"), r = n("<div/>", {
                "class": "span6 col-sm-6"
            }), n("<input/>", {
                type: "checkbox",
                value: "FRI"
            }).appendTo(r), n(r).append("&nbsp;Friday<br />"), n("<input/>", {
                type: "checkbox",
                value: "SAT"
            }).appendTo(r), n(r).append("&nbsp;Saturday<br />"), n("<input/>", {
                type: "checkbox",
                value: "SUN"
            }).appendTo(r), n(r).append("&nbsp;Sunday"), n(t).appendTo(d), n(r).appendTo(d), n("<br /><br /><br /><br />").appendTo(d), n(d).appendTo(p), n(p).append("Start time&nbsp;"), n(p).append('<select id="WeeklyHours" class="hours" style="width: 60px"><\/select>'), n(p).append('<select id="WeeklyMinutes" class="minutes" style="width: 60px"><\/select>'), n(p).appendTo(o), h = n("<div/>", {
                "class": "tab-pane",
                id: "Monthly"
            }), u = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "1",
                name: "MonthlyRadio",
                checked: "checked"
            }).appendTo(u), n(u).append("&nbsp;Day&nbsp"), n("<input/>", {
                id: "DayOfMOnthInput",
                type: "text",
                value: "1",
                style: "width: 40px"
            }).appendTo(u), n(u).append("&nbsp;of every&nbsp;"), n("<input/>", {
                id: "MonthInput",
                type: "text",
                value: "1",
                style: "width: 40px"
            }).appendTo(u), n(u).append("&nbsp;month(s)"), n(u).appendTo(h), i = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "2",
                name: "MonthlyRadio"
            }).appendTo(i), n(i).append("&nbsp;"), n(i).append('<select id="WeekDay" class="day-order-in-month" style="width: 80px"><\/select>'), n(i).append('<select id="DayInWeekOrder" class="week-days" style="width: 100px"><\/select>'), n(i).append("&nbsp;of every&nbsp;"), n("<input/>", {
                id: "EveryMonthInput",
                type: "text",
                value: "1",
                style: "width: 40px"
            }).appendTo(i), n(i).append("&nbsp;month(s)"), n(i).appendTo(h), n(h).append("Start time&nbsp;"), n(h).append('<select id="MonthlyHours" class="hours" style="width: 60px"><\/select>'), n(h).append('<select id="MonthlyMinutes" class="minutes" style="width: 60px"><\/select>'), n(h).appendTo(o), c = n("<div/>", {
                "class": "tab-pane",
                id: "Yearly"
            }), l = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "1",
                name: "YearlyRadio",
                checked: "checked"
            }).appendTo(l), n(l).append("&nbsp;Every&nbsp"), n(l).append('<select id="MonthsOfYear" class="months" style="width: 150px"><\/select>'), n(l).append("&nbsp;in day&nbsp;"), n("<input/>", {
                id: "YearInput",
                type: "text",
                value: "1",
                style: "width: 40px"
            }).appendTo(l), n(l).appendTo(c), f = n("<div/>", {
                "class": "well well-small"
            }), n("<input/>", {
                type: "radio",
                value: "2",
                name: "YearlyRadio"
            }).appendTo(f), n(f).append("&nbsp;The&nbsp;"), n(f).append('<select id="DayOrderInYear" class="day-order-in-month" style="width: 80px"><\/select>'), n(f).append('<select id="DayWeekForYear" class="week-days" style="width: 100px"><\/select>'), n(f).append("&nbsp;of&nbsp;"), n(f).append('<select id="MonthsOfYear2" class="months" style="width: 110px"><\/select>'), n(f).appendTo(c), n(c).append("Start time&nbsp;"), n(c).append('<select id="YearlyHours" class="hours" style="width: 60px"><\/select>'), n(c).append('<select id="YearlyMinutes" class="minutes" style="width: 60px"><\/select>'), n(c).appendTo(o), n(o).appendTo(rt),  resultsName = n(this).prop("id"), n(this).prop("name", resultsName), n(rt).appendTo(it), n(it).appendTo(tt), n(tt).appendTo(g), n(nt).append(g), n(this).after('&nbsp;<a href="#" id="cronGenPopOver" class="icon-edit glyphicon glyphicon-edit" data-original-title="Generate cron"><\/a>');
            n("#cronGenPopOver").popover({
                html: !0,
                content: function() {
                    return n(nt).html()
                },
                template: '<div class="popover" style="max-width:500px !important;width:500px"><div class="arrow"><\/div><div class="popover-inner"><h3 class="popover-title"><\/h3><div class="popover-content"><p><\/p><\/div><\/div><\/div>',
                placement: "bottom"
            }).on("click", function() {
                fillDataOfMinutesAndHoursSelectOptions(), fillDayWeekInMonth(), fillInWeekDays(), fillInMonths(), n("#CronGenTabs a").click(function(t) {
                    t.preventDefault(), n(this).tab("show")
                }), n("#CronGenMainDiv select, #CronGenMainDiv input").change(function() {
                    generate()
                }), n("#CronGenMainDiv input").focus(function() {
                    generate()
                })
            });
            return
        }
    })
})(jQuery), $("<div/>", {
    "class": "someelement",
    css: {
        color: "red"
    },
    click: function() {
        alert("you just clicked me!!")
    },
    data: {
        foo: "bar"
    }
}).appendTo("#container");
var fillInMonths = function() {
        var n = [{
            text: "January",
            val: "1"
        }, {
            text: "February",
            val: "2"
        }, {
            text: "March",
            val: "3"
        }, {
            text: "April",
            val: "4"
        }, {
            text: "May",
            val: "5"
        }, {
            text: "June",
            val: "6"
        }, {
            text: "July",
            val: "7"
        }, {
            text: "August",
            val: "8"
        }, {
            text: "September",
            val: "9"
        }, {
            text: "October",
            val: "10"
        }, {
            text: "Novermber",
            val: "11"
        }, {
            text: "December",
            val: "12"
        }];
        $(".months").each(function() {
            fillOptions(this, n)
        })
    },
    fillOptions = function(n, t) {
        for (var i = 0; i < t.length; i++) $(n).append("<option value='" + t[i].val + "'>" + t[i].text + "<\/option>")
    },
    fillDataOfMinutesAndHoursSelectOptions = function() {
        for (var n = 0; n < 60; n++) n < 24 && $(".hours").each(function() {
            $(this).append(timeSelectOption(n))
        }), $(".minutes").each(function() {
            $(this).append(timeSelectOption(n))
        })
    },
    fillInWeekDays = function() {
        var n = [{
            text: "Monday",
            val: "MON"
        }, {
            text: "Tuesday",
            val: "TUE"
        }, {
            text: "Wednesday",
            val: "WED"
        }, {
            text: "Thursday",
            val: "THU"
        }, {
            text: "Friday",
            val: "FRI"
        }, {
            text: "Saturday",
            val: "SAT"
        }, {
            text: "Sunday",
            val: "SUN"
        }];
        $(".week-days").each(function() {
            fillOptions(this, n)
        })
    },
    fillDayWeekInMonth = function() {
        var n = [{
            text: "First",
            val: "1"
        }, {
            text: "Second",
            val: "2"
        }, {
            text: "Thrid",
            val: "3"
        }, {
            text: "Fourth",
            val: "4"
        }];
        $(".day-order-in-month").each(function() {
            fillOptions(this, n)
        })
    },
    displayTimeUnit = function(n) {
        return n.toString().length == 1 ? "0" + n : n
    },
    timeSelectOption = function(n) {
        return "<option id='" + n + "'>" + displayTimeUnit(n) + "<\/option>"
    },
    generate = function() {
        var i = $("ul#CronGenTabs li.active a").prop("id"),
            n = "",
            t;
        switch (i) {
            case "MinutesTab":
                n = "0 0/" + $("#MinutesInput").val() + " * 1/1 * ? *";
                break;
            case "HourlyTab":
                switch ($("input:radio[name=HourlyRadio]:checked").val()) {
                    case "1":
                        n = "0 0 0/" + $("#HoursInput").val() + " 1/1 * ? *";
                        break;
                    case "2":
                        n = "0 " + Number($("#AtMinutes").val()) + " " + Number($("#AtHours").val()) + " 1/1 * ? *"
                }
                break;
            case "DailyTab":
                switch ($("input:radio[name=DailyRadio]:checked").val()) {
                    case "1":
                        n = "0 " + Number($("#DailyMinutes").val()) + " " + Number($("#DailyHours").val()) + " 1/" + $("#DaysInput").val() + " * ? *";
                        break;
                    case "2":
                        n = "0 " + Number($("#DailyMinutes").val()) + " " + Number($("#DailyHours").val()) + " ? * MON-FRI *"
                }
                break;
            case "WeeklyTab":
                t = "", $("#Weekly input:checkbox:checked").each(function() {
                    t += $(this).val() + ","
                }), t.length > 0 && (t = t.substr(0, t.length - 1)), n = "0 " + Number($("#WeeklyMinutes").val()) + " " + Number($("#WeeklyHours").val()) + " ? * " + t + " *";
                break;
            case "MonthlyTab":
                switch ($("input:radio[name=MonthlyRadio]:checked").val()) {
                    case "1":
                        n = "0 " + Number($("#MonthlyMinutes").val()) + " " + Number($("#MonthlyHours").val()) + " " + $("#DayOfMOnthInput").val() + " 1/" + $("#MonthInput").val() + " ? *";
                        break;
                    case "2":
                        n = "0 " + Number($("#MonthlyMinutes").val()) + " " + Number($("#MonthlyHours").val()) + " ? 1/" + Number($("#EveryMonthInput").val()) + " " + $("#DayInWeekOrder").val() + "#" + $("#WeekDay").val() + " *"
                }
                break;
            case "YearlyTab":
                switch ($("input:radio[name=YearlyRadio]:checked").val()) {
                    case "1":
                        n = "0 " + Number($("#YearlyMinutes").val()) + " " + Number($("#YearlyHours").val()) + " " + $("#YearInput").val() + " " + $("#MonthsOfYear").val() + " ? *";
                        break;
                    case "2":
                        n = "0 " + Number($("#YearlyMinutes").val()) + " " + Number($("#YearlyHours").val()) + " ? " + $("#MonthsOfYear2").val() + " " + $("#DayWeekForYear").val() + "#" + $("#DayOrderInYear").val() + " *"
                }
        }
        var selector = "#" + resultsName.replace(".","\\."); 
        $(selector).val(n)
    };
//@ sourceMappingURL=CronGen.min.js.map
