var sliderProperty = {
        sliderClass : "wrap_slider",
        numScroll : 2,
        vieSlide : 4,
        nextBtn : "right",
        prevBtn : "left"
      };
      
      var mainSlider = new miniSlider(sliderProperty);
     
     function miniSlider(obj) {
       this.sliderWrap = document.querySelectorAll('.' + obj.sliderClass)[0];
       this.slider = this.sliderWrap.children[0];
       this.numSlides = obj.numScroll;
       this.vieSlides = obj.vieSlide;
       this.prevBtn = document.getElementsByClassName(obj.prevBtn)[0];
       this.nextBtn = document.getElementsByClassName(obj.nextBtn)[0];
       
        var marginLeft = parseInt(this.slider.style.marginLeft),
            slideWidth = this.slider.children[0].offsetWidth,
            that = this;
           
        this.slider.className = "slider";
         
        if(isNaN(marginLeft)) {
          marginLeft = 0;
        } 
        
        addStyle(this.slider, this.sliderWrap);
        
        function addStyle (mainSlider, sliderWrap) { 
          mainSlider.style.transition = "margin-left 250ms";
          console.log(slideWidth * that.vieSlides);
          sliderWrap.style.width = slideWidth * that.vieSlides + 'px';
        }
        
        function getLenghtSlider() {
          var numSlide = that.slider.children.length;
          return slideWidth * (numSlide - that.vieSlides);
        }
          
        this.setNext = function() {
          var sliderMain = that.slider;
          if( -marginLeft !== getLenghtSlider()) {
             marginLeft = marginLeft - slideWidth * that.numSlides;
             sliderMain.style.marginLeft = marginLeft + 'px';
           } else {
             marginLeft = 0;
             sliderMain.style.marginLeft = 0 + "px";
           }
          
        }
        
        this.setPrev = function() {
          var sliderMain = that.slider;
          if(marginLeft !== 0) {
            marginLeft += slideWidth * that.numSlides;
            that.slider.style.marginLeft = marginLeft + 'px' 
          } else {
            marginLeft = -getLenghtSlider();
            that.slider.style.marginLeft = -getLenghtSlider() + 'px';
          }
        }
        
        this.prevBtn.addEventListener("click", this.setPrev);
        this.nextBtn.addEventListener("click", this.setNext);
      
     }