# ionic-bookings-app

```
- ''
- 'auth'

- 'bookings'

- 'places'
  | - 'discover'
  | - - 'place-detail'
  | - 'offers'
  | - - 'new-offer'
  | - - 'edit-offer'
  | - - 'offer-bookings'
```


### Routes : 
auth /

bookings / 

```md
[tabs/]          : PlacesPage      : `places/`
  [tabs/discover]   : DiscoverPage    : `discover/`       
  [tabs/discover:placeId] : PlaceDetailPage : `place-detail/` 

<!-- ORDER OF ROUTING MATTERS :down -->
  [tabs/offers] : OffersPage: `offers/`
  [tabs/offers/new] : NewOfferPage: `new-offer/`
  [tabs/offers/edit:placeId] : EditOfferPage: `edit-offer/`
  [tabs/offers/:placeId] : OfferBookingsPage: `offer-bookings/`
```
