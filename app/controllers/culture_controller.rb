class CultureController < ApplicationController
    # main page
    def index 
        if user_signed_in? 
           #yes
           @user_type = current_user.typenum # 0 => viewer, 1 => performer
        end
        
        @popular_pfs = Newpf.all.sort_by{ |post| post.get_likes.size }.take(6).reverse
        @popular_artists = Performanceinfo.all.sort_by{ |artist| artist.get_likes(:vote_scope => 'interest').size }.take(6).reverse
    end
    
    def introduce 
        if user_signed_in? 
           #yes
           @user_type = current_user.typenum # 0 => viewer, 1 => performer
        end
        
        @popular_pfs = Newpf.all.sort_by{ |post| post.get_likes.size }.take(6).reverse
        @popular_artists = Performanceinfo.all.sort_by{ |artist| artist.get_likes(:vote_scope => 'interest').size }.take(6).reverse
    end
    # 공연 등록 창
    def add
        if current_user.nil?
           redirect_to '/' 
        end
    end
    
    # 새 데이터를 저장함.
    def outputsave
        hello = Newpf.new
        hello.pf_title = params[:pf_title]
        hello.pf_add_br = params[:pf_add_br]
                
        hello.pf_address = params[:pf_address]
        hello.pf_address_sub = params[:pf_address_sub]
        hello.performanceinfo_id = params[:performanceinfo_id]    
        
        hello.pf_infor = params[:pf_infor]
        hello.pf_add_lat = params[:pf_add_lat]
        hello.pf_add_lng = params[:pf_add_lng]
        hello.pf_image = params[:pf_image]
        
        hello.pf_time_start = Time.parse(params[:pf_time_start])
        hello.pf_time_end = Time.parse(params[:pf_time_end])
        hello.pf_kind = params[:pf_kind].to_i
        hello.save
        
        redirect_to '/culture/explore'
    
    end
    
    # 공연 모아보기
    def explore
        # 공연 record 
        
        ## perform a paginated query: 
        @articles = Newpf.paginate(:page => params[:page], :per_page => 8).order('pf_time_start ASC')
        
        # 세션이 존재하는지 여부 확인
        if current_user.nil?
            @pfid = nil
        else
            @pfid = current_user.performanceinfo
        end
        
    end
    
    # 공연 단일 단위
    def single          
       
       @pid = Newpf.find(params[:id])
       @pfid = Performanceinfo.find(@pid.performanceinfo_id)
       
       
    end
    
    # 공연 좋아요 기능
    def single_like
        @post = Newpf.find(params[:pid])
        if current_user.nil?
            redirect_to '/'
        else
            @user = current_user
            if @user.voted_up_on? @post
                @post.unliked_by @user
                redirect_to '/culture/single/' + @post.id.to_s
            else
                @post.liked_by @user
                redirect_to '/culture/single/' + @post.id.to_s
            end
        end
    end
    
    # 관심아티스트 등록 action
    def profile_like
        @performer = Performanceinfo.find(params[:pfid])
        if current_user.nil?
            redirect_to '/'
        else
            @user = current_user
            if @user.voted_up_on? @performer, :vote_scope => 'interest'
                @performer.unliked_by @user, :vote_scope => 'interest'
                redirect_to '/culture/profile/' + @performer.id.to_s
            else
                @performer.liked_by @user, :vote_scope => 'interest'
                redirect_to '/culture/profile/' + @performer.id.to_s
            end
        end
    end
    
    # 관심아티스트 모아보기
    def interests
        if current_user.nil?
            redirect_to '/'
        else
            @pfs = current_user.find_liked_items(:vote_scope => 'interest')
            
        end
    end
    
    
    
    # 덧글
    def comment_post
       c = Comment.new
       c.newpf_id = params[:newpf_id]
       c.user_id = params[:user_id]
       c.context = params[:context]
       c.save
       
       redirect_to '/culture/single/' + c.newpf_id.to_s
    end
    
    # 덧글 삭제
    def comment_destory
        pid = params[:pid] # 게시글 id
        cid = params[:cid] # 덧글 id
        
        Newpf.find(pid).comments.find(cid).destroy
        
        redirect_to '/culture/single/' + pid.to_s
    end
    
    
    # 공연 수정 화면 출력
    def add_update
        if current_user.nil?
           redirect_to '/' 
        end
        
        @pid = Newpf.find(params[:id])
        
    end
    
    # 공연 수정
    def add_update_1
        if current_user.nil?
           redirect_to '/' 
        end
        
        @pid = Newpf.find(params[:id])
        @pid.pf_title = params[:new_pf_title]
        @pid.pf_add_br = params[:new_pf_add_br]
        
        @pid.pf_address = params[:new_pf_address]
        @pid.pf_address_sub = params[:new_pf_address_sub]
        
        @pid.pf_add_lat = params[:new_pf_add_lat]
        @pid.pf_add_lng = params[:new_pf_add_lng]
        
        @pid.pf_infor = params[:new_pf_infor]
        @pid.pf_image = params[:new_pf_image]
        @pid.pf_date = params[:new_dt_due]
        @pid.pf_time = params[:new_pf_time]
        @pid.pf_time_start = Time.parse(params[:pf_time_start])
        @pid.pf_time_end = Time.parse(params[:pf_time_end])
        
        @pid.pf_kind = params[:pf_kind].to_i

        @pid.save
        
        redirect_to '/culture/single/' + @pid.id.to_s
            
    end
    
    def delete
        if current_user.nil?
           redirect_to '/' 
        end
        
        @pid = Newpf.find(params[:id])
        
        @pid.destroy
        
        redirect_to '/culture/explore'
        
    end
    
    def team_search
        @teams = Performanceinfo.search(params[:query]).order("performanceinfos.id DESC").as_json
        
        respond_to do |format|
          format.html do 
              render :json => @teams
          end
        end
    end
    
    def category_team
        unless params[:pType] == 'all'
            @teams = Performanceinfo.where(:team_kind => params[:pType]).order("performanceinfos.id DESC").as_json
        else
            @teams = Performanceinfo.all.order("performanceinfos.id DESC").as_json
        end
        
        respond_to do |format|
          format.html do 
              render :json => @teams
          end
        end
    end 
    
    
    def category_newpf
        type_num = params[:pType]
        if type_num != "all"
            @posts = Newpf.where(:pf_kind => type_num).order("newpfs.pf_date asc").as_json
        else
            @posts = Newpf.all.as_json
        end
        
        respond_to do |format|
          format.html do 
              render :json => @posts
          end
        end
    end
    
    # 검색 기능 json 출력
    def search
        @posts = Newpf.search(params[:query]).order("newpfs.pf_date asc").as_json
        
        respond_to do |format|
          format.html do 
              render :json => @posts
          end
        end
    end
    
    # 공연팀 출력
    def pfadd
        @pf = Performanceinfo.all
        @pfid = current_user
        
    end

    # 공연팀 등록화면
    def pfupload
       unless current_user.performanceinfo.nil?
           redirect_to '/'
       end
    end
    
    # 공연팀 등록
    def outputsave_1
        hello = Performanceinfo.new
        hello.user_id = params[:team_user_id]
        hello.team_name = params[:team_name]
        hello.team_member = params[:team_member]
                
        hello.team_pic = params[:team_pic]
        hello.team_loca = params[:team_loca]
        hello.team_info = params[:team_info]    
        
        hello.team_fb = params[:team_fb]
        hello.team_tw = params[:team_tw]
        hello.team_blog = params[:team_blog]
        hello.team_kind = params[:pf_kind].to_i
        hello.save
    
        
        redirect_to '/culture/pfadd'
        
    end
    
    # 공연팀 단일 단위 출력
    def profile
        
        @articles = Newpf.where(:performanceinfo_id => params[:id])
        @pfid = Performanceinfo.find(params[:id])
        
    end
    
    
    # 공연팀 수정 화면
    def pf_update
        
        @pfid = Performanceinfo.find(params[:id])
        
    end
    
    #공연팀 수정
    def pf_update_1
        
        @pfid = Performanceinfo.find(params[:id])
        
        @pfid.team_name = params[:new_team_name]
        @pfid.team_member = params[:new_team_member]
                
        @pfid.team_pic = params[:new_team_pic]
        @pfid.team_loca = params[:new_team_loca]
        @pfid.team_info = params[:new_team_info]    
        
        @pfid.team_fb = params[:new_team_fb]
        @pfid.team_tw = params[:new_team_tw]
        @pfid.team_blog = params[:new_team_blog]

        @pfid.team_kind = params[:pf_kind].to_i
        
        @pfid.save
        
        redirect_to '/culture/pfadd'
    end
    
    # 공연팀 삭제
    def pf_delete
        
        @pfid = Performanceinfo.find(params[:id])
        
        @pfid.destroy
        
        redirect_to '/culture/pfadd'
        
    end

end
