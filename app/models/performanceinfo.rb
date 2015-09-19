class Performanceinfo < ActiveRecord::Base
    enum team_kind: [ :뮤지컬, :연극, :콘서트, :댄스, :전시, :스포츠, :버스킹, :기타 ]
    include SearchCop

    search_scope :search do
        attributes :team_name, :team_info, :team_loca, :team_kind
        # ...
    end
    
    belongs_to :user
    has_many :newpfs
    acts_as_votable
    mount_uploader :team_pic, S3uploader1Uploader
end
