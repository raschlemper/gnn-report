'use strict';

app.factory('ReportAppService', ['$http', 'PromiseService', 
    function($http, PromiseService) {

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYW1lIjoiQXNzaXMgQmVybmFyZG8gZGUgTGltYSBGaWxobyIsImVtYWlsIjpudWxsLCJ1c2VybmFtZSI6ImFzc2lzLmxpbWFAZ2VubmVyYS5jb20uYnIiLCJoYXNoIjoiU2VYUTZaMjBBUHQ3YUxwWFJCMU5ZVnNtaTJuR0FtcDFmYVcwWUlFaSIsImlkVXNlciI6MzEzNzI2LCJpZENvdW50cnkiOjMyLCJpZExhbmd1YWdlIjoyLCJsYW5ndWFnZUNvZGUiOiJwdCIsImlkVGltZXpvbmUiOjE5NywidHJhY2tCeSI6bnVsbCwiaWF0IjoxNTUzMjgzOTg3LCJpc3MiOiJodHRwOi8vYXBwcy5nZW5uZXJhLmNvbS5iciIsInN1YiI6ImFzc2lzLmxpbWFAZ2VubmVyYS5jb20uYnIifQ.p2hL_ON8nRmYUrk7JBNtIRHf9E17sE3Hz3m7N0TjJkf_WkOJw82Bk6BPx_cCL3zoVo54y0EefgV1fkU4XXxI2IKQb04zmBPVUqRE0dIF933oV5UFoh9w6U9NU6Bm2yMUKMN5C6DDYR5VRNxKdKB6bJEMDFkGMEjiFBYv-ifj0e-07mGOv8ToaGhqrryVgQHlPiAg4Wu-GMb6Tj5r4Frh0P84-As8rw3iVJhU6Cd_e1XKoYF68AQZcM2xBpuBfwU6z_G4j54v-67c5gdff1w8jI6_jkTDSrmVZvdp_Yw19fuTcSAbHlH793vh4atlTgqqspNor2l8LUQzUAcA4YFiZ5jwWRAuR4DoObHlMywF_K2NQjywrxAIiZFFn53IkjDe0jCExmdUdtWTrkPule6hC4ZM23U1FOZ3JRfYCgac-UwhP9In2wuUsIgrc5vKR482OAmpJ7dH-VbZLnzh8mCw_S-0h3TftJmR_vDe4BwnVrzFz_F_o6qfu77CxO52q7uKzKorXxJVi7f0wqJhra4jzJGl6F6jnqrYBxvzBmQtCuhOvDmttWHlRRto-MYHzBloDRinaxj-ViaErBVafMppTeZpignVeFbsAlvmqrEuJMFBWMh2ipKD5PR_cGWcZLMG10yRTZIxjWZz7HryDqXssKCKOGinAmi7FmhL9gpkAaU";
    const idInstitution = "101";
    const idReport = "817";

    var report = function() {
        return PromiseService.execute(
            $http.get("https://reports.gennera.com.br/institutions/" + idInstitution + "/reports/" + idReport, {
                headers: {"x-access-token": token } 
            })
        );
        
    };

    return {
        report: report
    };

}]);