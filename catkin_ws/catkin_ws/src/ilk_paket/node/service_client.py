#!/usr/bin/env python
# -*- coding: UTF-8 -*-

import rospy
from ilk_paket.srv import kelimeSayaci
import sys

rospy.init_node('service_client')

rospy.wait_for_service('kelime_sayaci')

say = rospy.ServiceProxy('kelime_sayaci',kelimeSayaci)

kelimeler = ' '.join(sys.argv[1:])

count = say(kelimeler)

print 'Kelimeler: ',kelimeler, 'Adet:',count.sayac
