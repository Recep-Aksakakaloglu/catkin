#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import rospy

from ilk_paket.srv import kelimeSayaci

def kelime_say(data):

    return len(data.kelimeler.split())

rospy.init_node('service_server')

service = rospy.Service('kelime_sayaci',kelimeSayaci,kelime_say)

rospy.spin()