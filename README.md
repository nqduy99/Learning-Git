this is just a demo project how to use Git

=================================================

- git log                 : Xem lịch sử tất cả các commit
- git show "id commit"    : Xem lịch sử của commit có id là "id commit" 
- git diff                : Hiển thị ra những thay đổi trên file nào so với lần commit trước đó

=================================================

Git concept
- working directory        : thư mục đang làm việc
- staging area             : khi chưa add rồi thì các thay đổi sẽ được lưu trong staging area
- git repository           : khi đã commit thì những thay đổi sẽ lưu trong git repository
=> khi dùng git push sẽ cập nhật lại những gì thay đổi

=================================================

- git checkout -- Cat.js            : Xoá bỏ những thay đổi mới trong file Cat.js mà chưa lên staging
- git reset -- Cat.js               : Đưa những thay gì đã thêm vào staging về working area tức là chưa "git add Cat.js"

=================================================
- git branch                          : Xem mình đang có những nhành nào trong git
- git checkout -b <branch>            : Thêm một nhánh vào git
- git checkout <branch>               : Chuyển sang nhánh có tên là "branch"
- git merge                           : Ghép hai nhánh lại với nhau
Để ghép nhanh B vào A nhánh A ( A <-- B ) thì branch hiện tại phải ở nhánh A trước, sau đó git merge tên của nhánh B
Cú pháp git merge B