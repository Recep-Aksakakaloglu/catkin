;; Auto-generated. Do not edit!


(when (boundp 'ilk_paket::toplam)
  (if (not (find-package "ILK_PAKET"))
    (make-package "ILK_PAKET"))
  (shadow 'toplam (find-package "ILK_PAKET")))
(unless (find-package "ILK_PAKET::TOPLAM")
  (make-package "ILK_PAKET::TOPLAM"))
(unless (find-package "ILK_PAKET::TOPLAMREQUEST")
  (make-package "ILK_PAKET::TOPLAMREQUEST"))
(unless (find-package "ILK_PAKET::TOPLAMRESPONSE")
  (make-package "ILK_PAKET::TOPLAMRESPONSE"))

(in-package "ROS")





(defclass ilk_paket::toplamRequest
  :super ros::object
  :slots (_a _b ))

(defmethod ilk_paket::toplamRequest
  (:init
   (&key
    ((:a __a) 0)
    ((:b __b) 0)
    )
   (send-super :init)
   (setq _a (round __a))
   (setq _b (round __b))
   self)
  (:a
   (&optional __a)
   (if __a (setq _a __a)) _a)
  (:b
   (&optional __b)
   (if __b (setq _b __b)) _b)
  (:serialization-length
   ()
   (+
    ;; int32 _a
    4
    ;; int32 _b
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int32 _a
       (write-long _a s)
     ;; int32 _b
       (write-long _b s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int32 _a
     (setq _a (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _b
     (setq _b (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(defclass ilk_paket::toplamResponse
  :super ros::object
  :slots (_sonuc ))

(defmethod ilk_paket::toplamResponse
  (:init
   (&key
    ((:sonuc __sonuc) 0)
    )
   (send-super :init)
   (setq _sonuc (round __sonuc))
   self)
  (:sonuc
   (&optional __sonuc)
   (if __sonuc (setq _sonuc __sonuc)) _sonuc)
  (:serialization-length
   ()
   (+
    ;; int32 _sonuc
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int32 _sonuc
       (write-long _sonuc s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int32 _sonuc
     (setq _sonuc (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(defclass ilk_paket::toplam
  :super ros::object
  :slots ())

(setf (get ilk_paket::toplam :md5sum-) "476dd41daa3fef28cab18c16e79dcab8")
(setf (get ilk_paket::toplam :datatype-) "ilk_paket/toplam")
(setf (get ilk_paket::toplam :request) ilk_paket::toplamRequest)
(setf (get ilk_paket::toplam :response) ilk_paket::toplamResponse)

(defmethod ilk_paket::toplamRequest
  (:response () (instance ilk_paket::toplamResponse :init)))

(setf (get ilk_paket::toplamRequest :md5sum-) "476dd41daa3fef28cab18c16e79dcab8")
(setf (get ilk_paket::toplamRequest :datatype-) "ilk_paket/toplamRequest")
(setf (get ilk_paket::toplamRequest :definition-)
      "int32 a
int32 b
---
int32 sonuc

")

(setf (get ilk_paket::toplamResponse :md5sum-) "476dd41daa3fef28cab18c16e79dcab8")
(setf (get ilk_paket::toplamResponse :datatype-) "ilk_paket/toplamResponse")
(setf (get ilk_paket::toplamResponse :definition-)
      "int32 a
int32 b
---
int32 sonuc

")



(provide :ilk_paket/toplam "476dd41daa3fef28cab18c16e79dcab8")


