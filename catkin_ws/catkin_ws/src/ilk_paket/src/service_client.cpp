#include "ros/ros.h"
#include "ilk_paket/toplam.h"
#include <cstdlib>

int main(int argc, char  **argv)
{
    ros::init(argc,argv,"service_client");

    if(argc!=3){
        ROS_INFO("kullanim: rosrun ilk_paket service_client argl1 argl2");
        ROS_INFO("arhl: integer sayi, arg2: integer sayi");
        return 1;
    }

ros::NodeHandle nh;
ros::ServiceClient service_client=nh.serviceClient<ilk_paket::toplam>("sayi_toplami");
ilk_paket::toplam srv;

srv.request.a=atoi(argv[1]);
srv.request.b=atoi(argv[2]);
if(service_client.call(srv)){
    ROS_INFO("gonderilen degerler: a=%d ve b=%d",srv.request.a,srv.request.b);
    ROS_INFO("alinan deger(sonuc) =%d",srv.response.sonuc);
}
else{
    ROS_ERROR("HATA");
    return 1;
}


    return 0;

}
