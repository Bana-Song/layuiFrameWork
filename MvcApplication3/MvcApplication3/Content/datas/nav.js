var navs = [{
    "title": "シャトルバス予約",
	"icon": "fa-bus",
	"spread": false,
	"href": "/Home/Appointment"
}, {
    "title": "外出社用車申請",
    "icon": "fa-car",
    "spread": false,
    "href": "/Home/TempAppointment"
}, {
    "title": "予約履歴と管理",
	"icon": "fa-cogs",
	"spread": false,
	"children": [{
	    "title": "シャトルバス予約履歴",
		"icon": "fa-table",
		"href": "/ReCoder/AppointmentRecord"
	}, {
	    "title": "外出社用車申請利益",
		"icon": "fa-navicon",
		"href": "/ReCoder/TempAppointmentRecord"
	}, {
	    "title": "個人情報管理",
	    "icon": "&#xe60c;",
	    "href": "/User/UserInfo"
	}]
}];


var adminnavs = [{
    "title": "首页",
    "icon": "fa-cubes",
    "spread": false,
    "href": "/Admin/AdminMain"
},{
    "title": "用户管理",
    "icon": "fa-cubes",
    "spread": false,
    "href": "/User/UserListInfo"
},{
    "title": "预约审批",
    "icon": "fa-cogs",
    "spread": false,
    "children": [ {
        "title": "临时用车审批",
        "icon": "fa-car",
        "href": "/Admin/TempAppoiment"
    }]
}, {
    "title": "班车管理",
    "icon": "fa-bus",
    "spread": false,
    "href": "/Admin/BusManager"
}, {
    "title": "司机管理",
    "icon": "fa-cubes",
    "spread": false,
    "href": "/Admin/DriverManager"
}];