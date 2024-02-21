import { Component } from '@angular/core';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article class="card">
      <h1 class="card-title">Frontend Masters Express</h1>
      <p class="card-number">0000 0000 0000 0000</p>
      <section class="membership-info">
        <p>
          <!-- name -->
          {{ account.name }}
        </p>
        <p>Valid Thru: {{ account.validThru }}</p>
        <p>CVV: {{ account.CVV }}</p>
        <p>
          <!-- membership status -->
          @switch (account.membershipStatus) { @case('gold') {
          <span class="badge gold">Gold</span>
          } @case ('silver') {
          <span class="badge silver">Silver</span>
          } @default{
          <span class="badge platinum">Platinum</span>
          } }
          <!-- @if (account.membershipStatus === 'gold') {
          <span class="badge gold">Gold</span>
          } @else if(account.membershipStatus === 'silver'){
          <span class="badge silver">Silver</span>
          } @else {
          <span class="badge platinum">Platinum</span>
          } -->
        </p>
      </section>
    </article>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  account: AccountInfo = {
    name: 'Melisa Evan',
    membershipStatus: 'gold',
    validThru: '12/2022',
    CVV: '123',
  };
}
