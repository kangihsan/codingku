function recentPosts(a){if(document.getElementById("recent-posts")){for(var c,d,b=a.feed.entry,e="",f=document.getElementById("recent-posts"),g=0;g<numPosts;g++){for(var h=0;h<numPosts;h++)if("alternate"==b[g].link[h].rel){d=b[g].link[h].href;break}var c=b[g].title.$t;e+='<li class="recent-posts"><strong><a href="'+d+'" title="'+c+'" target="_blank">'+c+"</a></strong></li>"}f.innerHTML=e}}var homePage="https://bloilmupendidikan.blogspot.com/",numPosts=7,rcp=document.createElement("script");rcp.src=homePage+"/feeds/posts/summary?alt=json-in-script&orderby=published&max-results="+numPosts+"&callback=recentPosts",document.getElementsByTagName("head")[0].appendChild(rcp);