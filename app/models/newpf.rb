class Newpf < ActiveRecord::Base
    enum pf_kind: [ :뮤지컬, :연극, :콘서트, :댄스, :전시, :스포츠, :버스킹, :기타 ]
    include SearchCop

    search_scope :search do
        attributes :pf_title, :pf_infor, :pf_address, :pf_address_sub, :pf_add_br
        attributes :performanceinfo => "performanceinfo.team_name"
        # ...
    end
  
    # 0:뮤지컬, 1:연극, 2:콘서트, 3:댄스, 4:전시, 5: 스포츠, 6:버스킹, 7:아마추어 동아리
    acts_as_votable
    mount_uploader :pf_image, S3uploaderUploader
    has_many :comments
    belongs_to :performanceinfo
end
