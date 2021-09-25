import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  scrollUp() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {

      window.scrollTo(0, 0);
    }
  }
  scroll() {
    var btnUp = document.getElementById('btn-up');
    var scroll = document.documentElement.scrollTop;
    if (btnUp != null) {
      if (scroll > 100) {
        btnUp.style.transform = 'scale(1)';
      } else if (scroll < 100) {
        btnUp.style.transform = 'scale(0)';
      }
    }
  }

  hideAll() {
    const allAccordions = document.querySelectorAll('.accordion-collapse');
    const videosHymns = document.querySelectorAll('.video-hymn');

    for (let i = 0; i < allAccordions.length; i++) {
      $(allAccordions[i]).collapse('hide');
    }

    for (let i = 0; i < videosHymns.length; i++) {
      let videoUrl = $(videosHymns[i]).attr("src");
      $(videosHymns[i]).attr("src","");
      $(videosHymns[i]).attr("src",videoUrl);
    } 

  }

  constructor() { }

  ngOnInit(): void {

    //SPINNER


    // BUTTON UP
    window.onscroll = this.scroll;
    window.requestAnimationFrame(this.scrollUp);

    // CLOSE ALL ACCORDIONS
    var allHtml = document.querySelector('html');
    if (allHtml != null) {
      allHtml.addEventListener('click', this.hideAll);
    }

    // CLOSE MODAL
    var closeModal = function (modal: string,
      video: string,
      src_video: string) {

      $(document).on('hide.bs.modal', modal, function () {
        $(video).attr('src', "");
      });
      $(document).on('show.bs.modal', modal, function () {
        $(video).attr('src', src_video);
      });

    };

    closeModal('#myModal', '#video', "https://www.youtube.com/embed/mL6o4NKpfEk?autoplay=1&showinfo=0&modestbranding=1&rel=0");

  }

}
