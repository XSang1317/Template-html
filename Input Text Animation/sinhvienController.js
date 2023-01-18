ungdungAngularjs.controller("sinhvienController", function($scope) {
    $scope.sinhvien = {
       dssv:[
          {ten:'Nguyễn Đức Dũng',mssv:'1911061988',diemthi:9.5},
          {ten:'Lâm Xuân Hoàng',mssv:'1911065225',diemthi:8.5},
          {ten:'Trần Lê Hoài Thy',mssv:'1911065415',diemthi:8.0},
          {ten:'Lê Văn Tâm',mssv:'1711060286',diemthi:8.5},
       ],
       hoten: function() {
          var doituongsinhvien;
          doituongsinhvien = $scope.sinhvien;
          return doituongsinhvien.ho + " " + doituongsinhvien.ten;
       }
    };
 });
