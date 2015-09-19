class CreatePerformanceinfos < ActiveRecord::Migration
  def change
    create_table :performanceinfos do |t|
      
      t.integer :user_id
      t.string :team_name    # 팀이름
      t.string :team_member   # 멤버 명
      t.string :team_pic    # 이미지 파일
      t.string :team_loca  # 한마디
      t.text :team_info      # 내용
      
      t.string :team_fb  # 페이스북
      t.string :team_tw  # 트위터
      t.string :team_blog  # 블로그
      
      t.integer :team_kind # 종류

      t.timestamps null: false
    end
  end
end
