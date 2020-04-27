// var data = {
//     raw: [
//         {"core":"derived_tstamp","timestamps":"event_name","user":"domain_userid","session":"domain_sessionidx","event":"geo_city","eventspecificfields":"app_id","application":"page_urlpath","useragent":"derived_tstamp","location":"dvce_created_tstamp","marketing":"dvce_sent_tstamp","page":"collector_tstamp","referer":"etl_tstamp","crossdomainreferer":"true_tstamp","visibility":"user_id","scrolldepth":"domain_userid","metadata":"network_userid"},
//         {"core":"2020-04-01T10:00:02.785","timestamps":"page_view","user":"be5016ad-c6ef-442d-aa18-…","session":4,"event":"SanFrancisco","eventspecificfields":"website","application":"/","useragent":"2020-04-01T10:00:02.785","location":"2020-04-01T10:00:01.443","marketing":"2020-04-01T10:00:01.449","page":"2020-04-01T10:00:02.791","referer":"2020-04-01T10:00:04.326","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"},
//         {"core":"2020-04-01T10:00:08.061","timestamps":"page_view","user":"be5016ad-c6ef-442d-aa18-…","session":4,"event":"SanFrancisco","eventspecificfields":"website","application":"/products/snowplow-insig…","useragent":"2020-04-01T10:00:08.061","location":"2020-04-01T10:00:08.026","marketing":"2020-04-01T10:00:08.028","page":"2020-04-01T10:00:08.063","referer":"2020-04-01T10:00:08.332","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"},
//         {"core":"2020-04-01T10:00:14.927","timestamps":"page_view","user":"292a1aaa-89f9-4441-b001-…","session":22,"event":"Manchester","eventspecificfields":"website","application":"/","useragent":"2020-04-01T10:00:14.927","location":"2020-04-01T10:00:12.770","marketing":"2020-04-01T10:00:12.804","page":"2020-04-01T10:00:14.961","referer":"2020-04-01T10:00:16.328","crossdomainreferer":"","visibility":"","scrolldepth":"292a1aaa-89f9-4441-b001-…","metadata":"93252393-6d33-4dab-90b7-…"},
//         {"core":"2020-04-01T10:00:18.426","timestamps":"page_ping","user":"be5016ad-c6ef-442d-aa18-…","session":4,"event":"SanFrancisco","eventspecificfields":"website","application":"/products/snowplow-insig…","useragent":"2020-04-01T10:00:18.426","location":"2020-04-01T10:00:18.359","marketing":"2020-04-01T10:00:18.360","page":"2020-04-01T10:00:18.427","referer":"2020-04-01T10:00:18.333","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"},
//         {"core":"2020-04-01T10:01:21.883","timestamps":"page_view","user":"292a1aaa-89f9-4441-b001-…","session":22,"event":"Manchester","eventspecificfields":"docs","application":"/docs/setup-snowplow-on-…","useragent":"2020-04-01T10:01:21.883","location":"2020-04-01T10:01:21.550","marketing":"2020-04-01T10:01:21.555","page":"2020-04-01T10:01:21.888","referer":"2020-04-01T10:01:23.347","crossdomainreferer":"","visibility":"","scrolldepth":"292a1aaa-89f9-4441-b001-…","metadata":"93252393-6d33-4dab-90b7-…"},
//         {"core":"2020-04-01T10:01:31.891","timestamps":"page_ping","user":"292a1aaa-89f9-4441-b001-…","session":22,"event":"Manchester","eventspecificfields":"docs","application":"/docs/setup-snowplow-on-…","useragent":"2020-04-01T10:01:31.891","location":"2020-04-01T10:01:31.800","marketing":"2020-04-01T10:01:31.803","page":"2020-04-01T10:01:31.894","referer":"2020-04-01T10:01:32.346","crossdomainreferer":"","visibility":"","scrolldepth":"292a1aaa-89f9-4441-b001-…","metadata":"93252393-6d33-4dab-90b7-…"},
//         {"core":"2020-04-01T10:01:41.571","timestamps":"page_ping","user":"292a1aaa-89f9-4441-b001-…","session":22,"event":"Manchester","eventspecificfields":"docs","application":"/docs/setup-snowplow-on-…","useragent":"2020-04-01T10:01:41.571","location":"2020-04-01T10:01:41.298","marketing":"2020-04-01T10:01:41.300","page":"2020-04-01T10:01:41.573","referer":"2020-04-01T10:01:42.336","crossdomainreferer":"","visibility":"","scrolldepth":"292a1aaa-89f9-4441-b001-…","metadata":"93252393-6d33-4dab-90b7-…"},
//         {"core":"2020-04-01T10:12:07.446","timestamps":"page_view","user":"e39fd884-8992-480f-8e37-…","session":67,"event":"NewYork","eventspecificfields":"console","application":"/","useragent":"2020-04-01T10:12:07.446","location":"2020-04-01T10:12:07.405","marketing":"2020-04-01T10:12:07.407","page":"2020-04-01T10:12:07.448","referer":"2020-04-01T10:12:08.348","crossdomainreferer":"","visibility":"example-user@company.com","scrolldepth":"e39fd884-8992-480f-8e37-…","metadata":"4b82d683-813b-4969-a4ae-…"},
//         {"core":"2020-04-01T10:12:12.289","timestamps":"link_click","user":"e39fd884-8992-480f-8e37-…","session":67,"event":"NewYork","eventspecificfields":"console","application":"/","useragent":"2020-04-01T10:12:12.289","location":"2020-04-01T10:12:12.198","marketing":"2020-04-01T10:12:12.202","page":"2020-04-01T10:12:12.293","referer":"2020-04-01T10:12:14.351","crossdomainreferer":"","visibility":"example-user@company.com","scrolldepth":"e39fd884-8992-480f-8e37-…","metadata":"4b82d683-813b-4969-a4ae-…"},
//         {"core":"2020-04-01T10:12:13.951","timestamps":"page_view","user":"e39fd884-8992-480f-8e37-…","session":67,"event":"NewYork","eventspecificfields":"console","application":"\n/4d9aac25-a9f7-46d2-8b4f…","useragent":"2020-04-01T10:12:13.951","location":"2020-04-01T10:12:13.909","marketing":"2020-04-01T10:12:13.911","page":"2020-04-01T10:12:13.953","referer":"2020-04-01T10:12:14.361","crossdomainreferer":"","visibility":"example-user@company.com","scrolldepth":"e39fd884-8992-480f-8e37-…","metadata":"4b82d683-813b-4969-a4ae-…"},
//         {"core":"2020-04-01T10:12:23.355","timestamps":"page_ping","user":"e39fd884-8992-480f-8e37-…","session":67,"event":"NewYork","eventspecificfields":"console","application":"\n/4d9aac25-a9f7-46d2-8b4f…","useragent":"2020-04-01T10:12:23.355","location":"2020-04-01T10:12:23.269","marketing":"2020-04-01T10:12:23.272","page":"2020-04-01T10:12:23.358","referer":"2020-04-01T10:12:24.365","crossdomainreferer":"","visibility":"example-user@company.com","scrolldepth":"e39fd884-8992-480f-8e37-…","metadata":"4b82d683-813b-4969-a4ae-…"},
//         {"core":"2020-04-01T10:14:55.231","timestamps":"page_view","user":"eb8c2f9b-8357-4e01-84e9-…","session":3,"event":"Berlin","eventspecificfields":"website","application":"\n/blog/2020/02/04/buildin…","useragent":"2020-04-01T10:14:55.231","location":"2020-04-01T10:14:54.614","marketing":"2020-04-01T10:14:54.616","page":"2020-04-01T10:14:55.233","referer":"2020-04-01T10:14:56.380","crossdomainreferer":"","visibility":"","scrolldepth":"eb8c2f9b-8357-4e01-84e9-…","metadata":"f4605d71-c3cd-4dc3-962c-…"},
//         {"core":"2020-04-01T10:15:05.890","timestamps":"page_ping","user":"eb8c2f9b-8357-4e01-84e9-…","session":3,"event":"Berlin","eventspecificfields":"website","application":"\n/blog/2020/02/04/buildin…","useragent":"2020-04-01T10:15:05.890","location":"2020-04-01T10:15:05.799","marketing":"2020-04-01T10:15:05.801","page":"2020-04-01T10:15:05.892","referer":"2020-04-01T10:15:07.348","crossdomainreferer":"","visibility":"","scrolldepth":"eb8c2f9b-8357-4e01-84e9-…","metadata":"f4605d71-c3cd-4dc3-962c-…"},
//         {"core":"2020-04-01T10:15:12.289","timestamps":"link_click","user":"eb8c2f9b-8357-4e01-84e9-…","session":3,"event":"Berlin","eventspecificfields":"website","application":"\n/blog/2020/02/04/buildin…","useragent":"2020-04-01T10:15:12.289","location":"2020-04-01T10:15:12.198","marketing":"2020-04-01T10:15:12.202","page":"2020-04-01T10:15:12.293","referer":"2020-04-01T10:15:14.351","crossdomainreferer":"","visibility":"","scrolldepth":"eb8c2f9b-8357-4e01-84e9-…","metadata":"f4605d71-c3cd-4dc3-962c-…"},
//         {"core":"2020-04-01T10:15:13.572","timestamps":"page_view","user":"eb8c2f9b-8357-4e01-84e9-…","session":3,"event":"Berlin","eventspecificfields":"website","application":"/products/snowplow-insig…","useragent":"2020-04-01T10:15:13.572","location":"2020-04-01T10:15:13.690","marketing":"2020-04-01T10:15:13.700","page":"2020-04-01T10:15:13.582","referer":"2020-04-01T10:15:14.394","crossdomainreferer":"","visibility":"","scrolldepth":"eb8c2f9b-8357-4e01-84e9-…","metadata":"f4605d71-c3cd-4dc3-962c-…"},
//         {"core":"2020-04-01T10:15:25.501","timestamps":"page_ping","user":"eb8c2f9b-8357-4e01-84e9-…","session":3,"event":"Berlin","eventspecificfields":"website","application":"/products/snowplow-insig…","useragent":"2020-04-01T10:15:25.501","location":"2020-04-01T10:15:25.212","marketing":"2020-04-01T10:15:25.217","page":"2020-04-01T10:15:25.506","referer":"2020-04-01T10:15:26.338","crossdomainreferer":"","visibility":"","scrolldepth":"eb8c2f9b-8357-4e01-84e9-…","metadata":"f4605d71-c3cd-4dc3-962c-…"},
//         {"core":"2020-04-01T10:29:59.417","timestamps":"page_view","user":"f729daad-549e-4a0a-ae1c-…","session":1,"event":"Austin","eventspecificfields":"website","application":"/mobile/","useragent":"2020-04-01T10:29:59.417","location":"2020-04-01T10:29:58.978","marketing":"2020-04-01T10:29:58.987","page":"2020-04-01T10:29:59.426","referer":"2020-04-01T10:30:00.397","crossdomainreferer":"","visibility":"","scrolldepth":"f729daad-549e-4a0a-ae1c-…","metadata":"c27d4731-1a2f-495b-9615-…"},
//         {"core":"2020-04-01T10:30:00.071","timestamps":"link_click","user":"e39fd884-8992-480f-8e37-…","session":67,"event":"NewYork","eventspecificfields":"console","application":"\n/4d9aac25-a9f7-46d2-8b4f…","useragent":"2020-04-01T10:30:00.071","location":"2020-04-01T10:30:59.970","marketing":"2020-04-01T10:30:59.972","page":"2020-04-01T10:30:00.073","referer":"2020-04-01T10:30:01.350","crossdomainreferer":"","visibility":"example-user@company.com","scrolldepth":"e39fd884-8992-480f-8e37-…","metadata":"4b82d683-813b-4969-a4ae-…"},
//         {"core":"2020-04-01T10:30:07.446","timestamps":"link_click","user":"f729daad-549e-4a0a-ae1c-…","session":1,"event":"Austin","eventspecificfields":"website","application":"/mobile/","useragent":"2020-04-01T10:30:07.446","location":"2020-04-01T10:30:07.405","marketing":"2020-04-01T10:30:07.407","page":"2020-04-01T10:30:07.448","referer":"2020-04-01T10:30:08.348","crossdomainreferer":"","visibility":"","scrolldepth":"f729daad-549e-4a0a-ae1c-…","metadata":"c27d4731-1a2f-495b-9615-…"},
//         {"core":"2020-04-01T10:30:10.151","timestamps":"page_view","user":"f729daad-549e-4a0a-ae1c-…","session":1,"event":"Austin","eventspecificfields":"website","application":"/customers/","useragent":"2020-04-01T10:30:10.151","location":"2020-04-01T10:30:10.110","marketing":"2020-04-01T10:30:10.111","page":"2020-04-01T10:30:10.152","referer":"2020-04-01T10:30:11.351","crossdomainreferer":"","visibility":"","scrolldepth":"f729daad-549e-4a0a-ae1c-…","metadata":"c27d4731-1a2f-495b-9615-…"},
//         {"core":"2020-04-01T10:42:28.288","timestamps":"page_ping","user":"be5016ad-c6ef-442d-aa18-…","session":5,"event":"SanFrancisco","eventspecificfields":"website","application":"/products/snowplow-insig…","useragent":"2020-04-01T10:42:28.288","location":"2020-04-01T10:42:28.016","marketing":"2020-04-01T10:42:28.020","page":"2020-04-01T10:42:28.292","referer":"2020-04-01T10:42:30.333","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"},
//         {"core":"2020-04-01T10:42:36.276","timestamps":"link_click","user":"be5016ad-c6ef-442d-aa18-…","session":5,"event":"SanFrancisco","eventspecificfields":"website","application":"/products/snowplow-insig…","useragent":"2020-04-01T10:42:36.276","location":"2020-04-01T10:42:35.796","marketing":"2020-04-01T10:42:35.797","page":"2020-04-01T10:42:36.277","referer":"2020-04-01T10:42:37.332","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"},
//         {"core":"2020-04-01T10:42:37.497","timestamps":"page_view","user":"be5016ad-c6ef-442d-aa18-…","session":5,"event":"SanFrancisco","eventspecificfields":"website","application":"/get-started/","useragent":"2020-04-01T10:42:37.497","location":"2020-04-01T10:42:37.457","marketing":"2020-04-01T10:42:37.459","page":"2020-04-01T10:42:37.499","referer":"2020-04-01T10:42:38.333","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"},
//         {"core":"2020-04-01T10:42:40.974","timestamps":"focus_form","user":"be5016ad-c6ef-442d-aa18-…","session":5,"event":"SanFrancisco","eventspecificfields":"website","application":"/get-started/","useragent":"2020-04-01T10:42:40.974","location":"2020-04-01T10:42:38.785","marketing":"2020-04-01T10:42:38.789","page":"2020-04-01T10:42:40.978","referer":"2020-04-01T10:42:42.364","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"},
//         {"core":"2020-04-01T10:42:41.393","timestamps":"change_form","user":"be5016ad-c6ef-442d-aa18-…","session":5,"event":"SanFrancisco","eventspecificfields":"website","application":"/get-started/","useragent":"2020-04-01T10:42:41.393","location":"2020-04-01T10:42:40.775","marketing":"2020-04-01T10:42:40.781","page":"2020-04-01T10:42:41.399","referer":"2020-04-01T10:42:42.372","crossdomainreferer":"","visibility":"","scrolldepth":"be5016ad-c6ef-442d-aa18-…","metadata":"28172b1a-96aa-4fe2-a4e3-…"}
//     ],
//     sessions: [
//         {"session":"session_id","timestamps":"session_index","user":"session_start_date","app":"session_start_time","engagement":"session_end_time","firstpage":"user_id","referer":"domain_userid","marketing":"network_userid","lastpage":"app_id","location":"page_views","ip":"conversions","useragent":"session_length"},
//         {"session":"289d6851-77ca-45ad-a611-…","timestamps":4,"user":43922,"app":43922.4167013889,"engagement":43922.416875,"firstpage":"","referer":"be5016ad-c6ef-442d-aa18-…","marketing":"28172b1a-96aa-4fe2-a4e3-…","lastpage":"website","location":2,"ip":0,"useragent":15},
//         {"session":"01e67be0-600b-4e48-a57e-…","timestamps":22,"user":43922,"app":43922.4168402778,"engagement":43922.4178472222,"firstpage":"","referer":"292a1aaa-89f9-4441-b001-…","marketing":"93252393-6d33-4dab-90b7-…","lastpage":"website","location":2,"ip":0,"useragent":87},
//         {"session":"501d77d3-6e2a-4a6e-b66e-…","timestamps":1,"user":43922,"app":43922.4198263889,"engagement":43922.4198842593,"firstpage":"","referer":"5f1c3cd1-046d-4af3-a8f6-…","marketing":"7128ff2f-781f-416c-99e2-…","lastpage":"website","location":1,"ip":0,"useragent":5},
//         {"session":"7f0a23a5-e392-48d2-b37b-…","timestamps":67,"user":43922,"app":43922.4250810185,"engagement":43922.4375,"firstpage":"example-user@company.com","referer":"e39fd884-8992-480f-8e37-…","marketing":"4b82d683-813b-4969-a4ae-…","lastpage":"console","location":2,"ip":0,"useragent":1073},
//         {"session":"b23a6994-9520-4347-b1c7-…","timestamps":3,"user":43922,"app":43922.427025463,"engagement":43922.4273842593,"firstpage":"","referer":"eb8c2f9b-8357-4e01-84e9-…","marketing":"f4605d71-c3cd-4dc3-962c-…","lastpage":"website","location":2,"ip":0,"useragent":31},
//         {"session":"694baa7b-67d8-470a-9dc7-…","timestamps":14,"user":43922,"app":43922.4294097222,"engagement":43922.4334027778,"firstpage":"example-user2@company2.c…","referer":"463cc6f3-c4e2-4aee-b946-…","marketing":"192f5fc0-2f41-4fcb-93d9-…","lastpage":"console","location":4,"ip":0,"useragent":345},
//         {"session":"c9a528c2-72ae-458a-9e05-…","timestamps":1,"user":43922,"app":43922.4374884259,"engagement":43922.4376157407,"firstpage":"","referer":"f729daad-549e-4a0a-ae1c-…","marketing":"c27d4731-1a2f-495b-9615-…","lastpage":"website","location":2,"ip":0,"useragent":11},
//         {"session":"86e9281f-8a12-4fa1-b761-…","timestamps":5,"user":43922,"app":43922.4461574074,"engagement":43922.4475925926,"firstpage":"","referer":"be5016ad-c6ef-442d-aa18-…","marketing":"28172b1a-96aa-4fe2-a4e3-…","lastpage":"website","location":1,"ip":1,"useragent":124},
//         {"session":"db33e52e-9dfd-4d18-b804-…","timestamps":6,"user":43922,"app":43923.4319907407,"engagement":43923.434537037,"firstpage":"","referer":"3d16fcf1-9b9d-404e-b014-…","marketing":"aed54c2d-dbec-4328-86b6-…","lastpage":"website","location":3,"ip":0,"useragent":220},
//         {"session":"042d0e66-f3ea-4d55-b7b4-…","timestamps":3,"user":43922,"app":43924.4412731482,"engagement":43924.4443171296,"firstpage":"","referer":"91e669dd-7ab2-472b-9557-…","marketing":"535179d3-1d4b-4506-b5b6-…","lastpage":"website","location":7,"ip":1,"useragent":263}
//     ],
//     content: [
//         {"content":"title","totalengagement":"page_urlpath","avgmonthlyengagement":"author"},
//         {"content":"Introducing\nSnowplowMic…","totalengagement":"/blog/2019/07/17/introdu…","avgmonthlyengagement":"JoshuaBrady"},
//         {"content":"Timespentisthe\nmosti…","totalengagement":"\nblog/2019/08/07/time-spe…","avgmonthlyengagement":"LewisNewman"},
//         {"content":"Re-thinkingthestructur…","totalengagement":"/blog/2020/01/24/re-thin…","avgmonthlyengagement":"MarieHertzog"},
//         {"content":"Buildingadataquality…","totalengagement":"\n/blog/2020/02/04/buildin…","avgmonthlyengagement":"AnnaSoininen"},
//         {"content":"UnderstandingtheSameSi…","totalengagement":"/blog/2020/02/17/underst…","avgmonthlyengagement":"SeanHutchinson"}
//     ]
// }


// var table = {
//     render: (data) => {
//            return data.map((val,key) => {
//                 key == 0 ? tag = 'th' : tag = 'td';
//                 return `<tr>=${Object.values(val).map(item => `<${tag}>${item}</${tag}>`)}=</tr>`
//             })
//     },
//     validateByUserId: (id) => {
//         // 2nd wave todo
//     }
// }

// $(document).ready(function(){
//     $('#raw').html(table.render(data.raw))
//     $('#sessions').html(table.render(data.sessions))
//     $('#content').html(table.render(data.content))
// });

// Add tooltip to table td
$(function () {
    $('table td').tooltip({
        placement: "top",
        container: 'body',
        delay: { "show": 30, "hide": 10 }   
    })
})


// Toggle the raw-data table in explore-snowplow-data-part-2 page
$('#raw-set-data-toggle').click(function(){
    $('#raw-set-data').slideToggle();
})

// Toggle submit form in explore-snowplow-data-part-1 page
var isProductFormToggled = 0
$('#product-form-toggle').click(function(){
    isProductFormToggled = 1;

    if(isProductFormToggled){
        $('#product-form').slideToggle();
        setTimeout(function(){ 
            console.log('vo timeout')
            $('html, body').animate({
                scrollTop: ($('#product-form-toggle').offset().top -200)
            },500);
         }, 300);
    }else{
        console.log('veke kliknato')
        $('#product-form').slideToggle();
    }
});



// Add top horizontal bar to raw data table. 
// Get width of the raw table and apply it to the empty div with scrollbar


var tableSize = $('.raw-data-css table').width();
$('.top-scrollbar').width(tableSize);


// Bind the wrapper scrolls

$(function(){
    $(".top-scroller-target").scroll(function(){
        $(".raw-data-css")
            .scrollLeft($(".top-scroller-target").scrollLeft());
    });
    $(".raw-data-css").scroll(function(){
        $(".top-scroller-target")
            .scrollLeft($(".raw-data-css").scrollLeft());
    });
});