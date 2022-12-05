import { Component } from '@angular/core';

import {
  Image,
  ModalGalleryService,
  ModalGalleryRef,
  ModalGalleryConfig,
  ModalLibConfig
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {
  constructor(private modalGalleryService: ModalGalleryService) { }

  images: Image[] = [
    new Image(0, {
      img: '../assets/images/artwork/WPNProfs_Page1.png'
    }),
    new Image(1, {
      img: '../assets/images/artwork/Spells_Page1.png'
    }),
    new Image(2, {
      img: '../assets/images/artwork/WPNSkills_Page1.png'
    })
  ];

  openModal(id: number, imageIndex: number, libConfig?: ModalLibConfig): void {
    const imageToShow: Image = this.images[imageIndex];
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: imageToShow,
      libConfig
    } as ModalGalleryConfig) as ModalGalleryRef;
  }

}
