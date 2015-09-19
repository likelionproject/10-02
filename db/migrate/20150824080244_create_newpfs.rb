class CreateNewpfs < ActiveRecord::Migration
  def change
    create_table :newpfs do |t|
      
      t.string :pf_title    # 제목
      t.string :pf_add_br   # 위치에 대한 간략한 설명
      t.text :pf_infor      # 내용
      t.string :pf_address  # 정확한 위치
      t.string :pf_address_sub  # ~~길(~~로) 까지의 위치
      t.string :pf_add_lat  # 위도
      t.string :pf_add_lng  # 경도
      t.string :pf_image    # 이미지 파일
      
      t.date :pf_date       # 날짜
      t.string :pf_time_start     # 시작시간
      t.string :pf_time_end       # 끝나는시간
      
      t.integer :performanceinfo_id # 공연팀 프로필 id
      
      t.integer :pf_kind # 0:뮤지컬, 1:연극, 2:콘서트, 3:클래식무용, 4:전시, 5: 스포츠, 6:버스킹, 7:아마추어 동아리

    end
  end
end
