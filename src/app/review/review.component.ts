import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  reviews = [
    {
      id: 1,
      userId: '123',
      userProfileImageUrl: 'https://cdn.imgchest.com/files/myd5czpld34.png',
      userName: 'User 1',
      text: 'Great anime!',
      timestamp: new Date(),
      isSpoiler: false,
      rating: 2
    },
    {
      id: 2,
      userId: '456',
      userProfileImageUrl: 'https://cdn.hero.page/pfp/4d60260f-b986-496d-8b12-f508aa2628d2-anime-boy-glaring-into-the-distance-4k-anime-boy-profile-picture-4.png',
      userName: 'User 2',
      text: 'Loved this manga.',
      timestamp: new Date(),
      isSpoiler: true,
      rating: 5,
    },
  ];

  showModal = false;
  reviewText = '';
  isSpoiler = false;
  userProfileImageUrl = '';
  userName = '';
  currentUserId = '';
  rating = 0;
  stars = [1, 2, 3, 4, 5];

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  rate(star: number) {
    this.rating = star
  }

  submitReview() {
    const newReview = {
      id: Date.now(),
      userId: this.currentUserId,
      userProfileImageUrl: this.userProfileImageUrl,
      userName: this.userName,
      text: this.reviewText,
      timestamp: new Date(),
      isSpoiler: this.isSpoiler,
      rating: this.rating
    };

    this.reviews.push(newReview);
    this.reviewText = '';
    this.isSpoiler = false;
    this.closeModal();
  }

  deleteReview(reviewId: number) {
    this.reviews = this.reviews.filter(review => review.id !== reviewId);
  }
}
