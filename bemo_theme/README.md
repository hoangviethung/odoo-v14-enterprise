#Cách 1: Sử dụng Pycharm (cách cho người mới)
	- Bước 1: Tải và cài đặt Pycharm.
	- Bước 2: Pull Source Odoo gốc về.
	- Bước 3: Kiểm tra version python => cài về máy version 3.7 là đúng.
	- Bước 4: cd về odoo gốc => pip3 install -r requirements.txt
	- Bước 5: Cài postgresql Ver >12.2 => 12.6
	- Bước 5.1: Gõ câu lệnh này vào Ternimal => brew install postgresql
	- Bước 6: Tạo user mặc định cho Odoo
	- Bước 7: Tạo file config cho Odoo => Vào thư mục debian => Copy nội dung của odoo.conf
	- Bước 8: Vào file config vừa tạo paste vào chỉnh lại thông số