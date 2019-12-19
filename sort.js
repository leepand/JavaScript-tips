    //排序函数
    function sortServices(services, sortKey,staredinfo,algo_request_info) {
        var self = this;
        // Sort by popularity
        if(sortKey == 'popularity') {
            services.sort(function(serviceA, serviceB) {
                var pointsOfA = algo_request_info[serviceA.algoname];
                var pointsOfB = algo_request_info[serviceB.algoname];
                if(pointsOfB != pointsOfA) {
                    return pointsOfB - pointsOfA;
                } else {
                    // Return newer if popularity is the same
                    var createdA = new Date(serviceA.insert_tm).getTime();
                    var createdB = new Date(serviceB.insert_tm).getTime();
                    return createdB - createdA;
                }
            });
        } else if(sortKey == 'staredinfo'){//Sort by stared
            services.sort(function(serviceA, serviceB){
                var pointsOfA = staredinfo[serviceA.algoname]['star_cnt'];
                var pointsOfB = staredinfo[serviceB.algoname]['star_cnt'];
                if(pointsOfB != pointsOfA) {
                    return pointsOfB - pointsOfA;
                } else {
                    // Return newer if popularity is the same
                    var createdA = new Date(serviceA.insert_tm).getTime();
                    var createdB = new Date(serviceB.insert_tm).getTime();
                    return createdB - createdA;
                }
            });
        }else {// Sort by date
            services.sort(function(commentA, commentB) {
                var createdA = new Date(commentA.insert_tm).getTime();
                var createdB = new Date(commentB.insert_tm).getTime();
                console.log(createdA,createdB)
                if(sortKey == 'oldest') {
                    return createdA - createdB;
                } else {
                    return createdB - createdA;
                }
            });
        }
    }




var willSort = [
    {
        name:'shangwenhe',
        age:25,
        height:170
    },
    {
        name:'zhangsan',
        age:31,
        height:169
    },
    {
        name:'lisi',
        age:31,
        height:167
    },
    {
        name:'zhaowu',
        age:22,
        height:160
    },
    {
        name:'wangliu',
        age:23,
        height:159
    }
];

/*
    @function     JsonSort 对json排序
    @param        json     用来排序的json
    @param        key      排序的键值
*/
function JsonSort(json,key){
    //console.log(json);
    for(var j=1,jl=json.length;j < jl;j++){
        var temp = json[j],
            val  = temp[key],
            i    = j-1;
        while(i >=0 && json[i][key]>val){
            json[i+1] = json[i];
            i = i-1;   
        }
        json[i+1] = temp;
       
    }
    //console.log(json);
    return json;

}
var json = JsonSort(willSort,'age');
console.log(json);
