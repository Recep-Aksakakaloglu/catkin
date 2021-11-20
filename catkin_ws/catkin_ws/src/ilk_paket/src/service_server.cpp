#include "ros/ros.h"
#include "ilk_paket/toplam.h"

bool hesapla(ilk_paket::toplam::Request &istek, ilk_paket::toplam::Response &donut){


    donut.sonuc=istek.a + istek.b;

    ROS_INFO("istek: x=%d,y=%d",istek.a,istek.b);
    ROS_INFO("gönderilen donut: %d",donut.sonuc);

    return true;
}

int main(int argc, char **argv)
{
    ros::init(argc,argv,"service_server");
    ros::NodeHandle nh;

    ros::ServiceServer service_server=nh.advertiseService("sayi_toplami",hesapla);

    ROS_INFO("Service Server hazir!");

    ros::spin();

    return 0;
}
