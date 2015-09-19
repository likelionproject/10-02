class ListController < ApplicationController
    # 공연 모아보기
    def index
        # 공연 record 
        
        ## perform a paginated query: 
        @articles = Newpf.paginate(:page => params[:page], :per_page => 8).order('pf_date ASC')
        
        # 세션이 존재하는지 여부 확인
        if current_user.nil?
            @pfid = nil
        else
            @pfid = current_user.performanceinfo
        end
        
    end
    
    def single          
       @pid = Newpf.find(params[:id])
       @pfid = Performanceinfo.find(@pid.performanceinfo_id)
    end
    
end
