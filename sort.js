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
