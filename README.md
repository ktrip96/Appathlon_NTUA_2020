

## Θέμα εφαρμογής

 Η εφαρμογη θα δειχνει σε ενα χαρτη της Αττικης (για αρχη), τις περιοχες με την υψηλοτερη εγκληματικοτητα. 
 Η εγκληματικοτητα χωριζεται σε περαιρετω κατηγοριες, οπως π.χ. "επιθεση στο δρομο, κλεψιμο αυτοκινητου, επιθεση στο μετρο, ληστεια σε τραπεζα κλπ." Οι αρχικες τιμες που θα εχει η βαση θα ειναι ενα dataset με ολα τα περιστατικα, τις ημερομηνιες και την τοποθεσια. Σε περιπτωση που δεν υπαρχει τετοιο dataset, η βαση θα γινεται update απο τον καθε χρηστη - θυμα μιας εγκληματικης πραξης. Για να ειναι εγκυρο το ποστ καθε χρηστη, θα πρεπει πρωτα να ειναι επιβεβαιωμενο απο την αστυνομια, μεσω ενος μοναδικου crime-number. Η εφαρμογη θα παρουσιαζει top - 5, top - 10 κλπ περιοχες εγκληματικοτητας αναλογως καθε φορα με το ειδος του εγκληματος. π.χ. Εγω σαν Κωνσταντινος, θελω να δω ποιες ειναι οι 5 γειτονιες της Αττικης με τα υψηλοτερα ποσοστα στην κατηγορια "παραβιαση του αυτοκινητου". Τα input του query που θα ζηταω θα περιλαμβανει 1.νομός, 2.ειδος εγκληματος, 3.ημερομηνία (ετος , μηνας) π.χ. 1. Αττικη, 2. Ληστεια σε τραπεζα , 3. 2020 Ιουλιος Ο καθε χρηστης θα εχει προσβαση στο ιστορικο της βασης, προκειμενου να βλεπει καθε εγκλημα που πραγματοποιηθηκε και να προετοιμαζεται καταλληλα.

 Το stack που θα χρησιμοποιήσω είναι το **MERN. (MongoDB, ExpressJS, ReactJS, NodeJS)** 


![](/client/src/images/main2.jpg)

### Video Files

* [Google Drive Link](https://drive.google.com/drive/folders/1aPQbeiRNoKtBLusuiXeu2dCWhJdfQQXY?usp=sharing) - Video Παρουσίαση 

Συγνωμη για τη μουσικη που ακουγεται σε καποια απο τα βιντεο... 


### How to download 

- git clone το repo.
- **npm install** στον φακελο Appathlon/server ΚΑΙ στον φακελο Appathlon/client
- Λόγω του authentication για να εχετε πρόσβαση στην εφαρμογη θα χρειαστειτε το αρχειο .env, που περιεχει τον κωδικο της βασης και τον jwt password.
(αν το χρειαζεστε στειλτε μου μηνυμα στο ktrip96@gmail.com)



### Notes

To be done in the future:
- Δημιουργία police accounts που θα εχουν τη δυνατόητα να κανουν verify τα εγκλήματα.
- Ένα heatmap που θα σου δείχνει στο χαρτη, την εγκληματικότητα της Αττικής.
- Να πάρω actual δεδομένα από την αστυνομία, είτε της Αττικής είτε κάποιου άλλου νομού.

