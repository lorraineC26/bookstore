const bookData = [
  {
    id: 1,
    title: "The Book of Bill",
    price: 35.99,
    category: "fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1368092209/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "The demon that terrorized Gravity Falls is back from the great beyond to finally tell his side of the story in The Book of Bill, written by none other than Bill Cipher himself. Inside, Bill sheds light on his bizarre origins, his sinister effects on human history, the Pines family’s most embarrassing secrets, and the key to overthrowing the world (laid out in a handy step-by-step guide). This chaotic and beautifully illustrated tome contains baffling riddles, uncrackable ciphers, lost Journal 3 pages, ways to cheat death, the meaning of life, and a whole chapter on Silly Straws. But most importantly, The Book of Bill is deeply, deeply cursed.",
  },
  {
    id: 2,
    title: "We Meant Well: A Novel",
    price: 24.95,
    category: "fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/177041665X/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "It’s the middle of the night in Los Angeles when Maya, a married mother of one, receives the phone call. Her colleague Marc has been accused of assaulting a local girl in Likanni, where they operate a charitable orphanage. Can she get on the next flight? When Maya arrives, protesters surround the compound. The accuser is Lele, her former protégé and the chief’s daughter. There are no witnesses, no proof of any crime.",
  },
  {
    id: 3,
    title: "White Nights",
    price: 24.95,
    category: "fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0241619785/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "Regarded as one of world literature's foremost novelists, Fyodor Dostoyevsky's short stories are also some of the best ever written. “White Nights” tells of love and loss on the streets of St. Petersburg, “A Nasty Business” presents the hilarious tale of a general dropping in on the wedding of a subordinate, while “The Meek One” is an existentialist tale of marriage and tragedy.",
  },
  {
    id: 4,
    title: "More Days at the Morisaki Bookshop: A Novel",
    price: 21.99,
    category: "fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0063278715/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "Set again in the beloved Japanese bookshop and nearby coffee shop in the Jimbochi neighborhood of Toyko, More Days at the Morisaki Bookshop deepens the relationship between Takako, her uncle Satoru , and the people in their lives. A new cast of heartwarming regulars have appeared in the shop, including an old man who wears the same ragged mouse-colored sweater and another who collects books solely for the official stamps with the author’s personal seal.",
  },
  {
    id: 5,
    title: "Collide",
    price: 20.0,
    category: "romance",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/073525043X/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "An ultimatum from Summer Preston’s thesis advisor thrusts her into an unexpected collision with the hockey team’s captain, Aiden Crawford. She’s caught between conflicting desires of fulfilling her lifelong dream of becoming a sport psychologist and staying as far away as possible from the god-awful sport. And once she meets Aiden—well, let’s just say he confirms all her worst assumptions about hockey players.",
  },
  {
    id: 6,
    title: "Love Unwritten",
    price: 26.99,
    category: "romance",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/172829214X/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "Rafael Ellie Sinclair is a hopeless romantic who writes love songs. I'm a struggling workaholic who could inspire a hundred breakup albums.On paper, we have nothing in common except for my son.For eight months, I avoid her until our summer trip.Fourteen days. Two islands. And one nanny I shouldn't be attracted to.Spending time with Ellie is expected, but enjoying her company?That isn't part of our travel plans.After my divorce, I swore to protect my heart at all costs.Even if it means breaking hers in the process.",
  },
  {
    id: 7,
    title: "My Dark Romeo",
    price: 20.99,
    category: "romance",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1950209075/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "It was supposed to be a harmless kiss at a lavish debutante ball.A clandestine moment with a handsome stranger.But unlike his namesake, my Romeo isn't driven by love.He's fueled by revenge.To him, I'm a chess piece. Leverage.His rival's betrothed.To me, he is a man deserving of poison.A dark prince I refuse to marry.He thinks I'll accept my fate.Well, I plan to rewrite it. And in my story, Juliet doesn't die. But Romeo? He perishes.",
  },
  {
    id: 8,
    title: "Highest Bidder",
    price: 56.99,
    category: "romance",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/9798885921152/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "Everything has a price ... and I'm willing to pay. I own her for now. She's mine for an entire month. But a month isn't long enough for what I want to do with her. I don't care what the contract says. I bought her and now she's mine. Dive into the series readers can't stop talking about! All four titles included in one collection. Enjoy!",
  },
  {
    id: 9,
    title: "Terms and Conditions",
    price: 24.39,
    category: "romance",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1737507730/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "I'm destined to become the next CEO of my family's media empire.The only problem? My grandfather's inheritance clause.Fulfilling his dying wish of getting married and having an heir seemed impossible until my assistant volunteers for the job.Our marriage was supposed to be the perfect solution to my biggest problem.But the more we act in love for the public, the more unsure I feel about our contract.Caring about Iris was never part of the deal.",
  },
  {
    id: 10,
    title: "As Long as You Need: Permission to Grieve",
    price: 24.99,
    category: "non-fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1400336848/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "In As Long As You Need, J.S. offers an honest and unrushed engagement with grief, decoding four types of grieving—spiritual, mental, physical, and relational—and offering compassionate self-care and soul-care along the way. If you are struggling to process loss, pain, or grief from the last few years or the last few minutes, J.S. is an experienced and deeply empathetic listener and grief catcher who has held the pain and questions of thousands of patients. ",
  },
  {
    id: 11,
    title: "Knife: Meditations After an Attempted Murder",
    price: 27.96,
    category: "non-fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1039009654/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "From internationally renowned writer and Booker Prize winner Salman Rushdie, a searing, deeply personal account of enduring—and surviving—an attempt on his life thirty years after the fatwa that was ordered against him. Speaking out for the first time, and in unforgettable detail, about the traumatic events of August 12, 2022, Salman Rushdie answers violence with art, and reminds us of the power of words to make sense of the unthinkable. Knife is a gripping, intimate, and ultimately life-affirming meditation on life, loss, love, art—and finding the strength to stand up again.",
  },
  {
    id: 12,
    title: "Health for All: A Doctor's Prescription for a Healthier Canada",
    price: 26.21,
    category: "non-fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0771011725/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "Jane Philpott has spent her life learning what makes people sick and what keeps people well. She has witnessed miracles in modern medicine. She has also watched children die of starvation in a world that has plenty of food. With Health for All, she sounds a clarion call for a radical disruption in a health care system that is broken—but not beyond repair. The vision is rooted in a deep-seated commitment to health equity.",
  },
  {
    id: 13,
    title: "5 Ingredients Mediterranean: Simple Incredible Food",
    price: 31.55,
    category: "non-fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0525612904/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "With over 125 utterly delicious, easy-to-follow recipes, it’s all about making everyday cooking super exciting, with minimal fuss – all while transporting you to sunnier climes. You’ll find recipes to empower you to make incredibly delicious food without copious amounts of ingredients, long shopping lists or loads of washing up. 65% of the recipes are meat-free or meat-reduced, and all offer big, bold flavor.",
  },
  {
    id: 14,
    title: "Fast Like a Girl",
    price: 23.99,
    category: "non-fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1401969925/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "Includes a 30-Day fasting reset that uses the power of your cycle—even if you no longer have one! A go-to fasting manual created specifically to address women's needs based on their hormones and menstrual cycle by Dr. Mindy Pelz, a well-known expert on women and fasting, whose fast-growing YouTube channel has become the destination for women who want to learn about fasting.",
  },
  {
    id: 15,
    title: "The Giving Book: A Journal to Grow",
    price: 20.99,
    category: "non-fiction",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1552674959/1.jpg?width=810&maxHeight=810&quality=85",
    description:
      "we are not here to receive love; we are here to give love – even if just to ourselves.",
  },
  {
    id: 16,
    title: "One Piece",
    image: "https://m.media-amazon.com/images/I/71kvo+fijnL.jpg",
    price: 9.99,
    category: "manga",
    description:
      "Gol D. Roger, a man referred to as the 'King of the Pirates,' is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line.\n\nAnnouncing that One Piece can be claimed by anyone worthy enough to reach it, the King of the Pirates is executed and the Great Age of Pirates begins.Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new King of the Pirates. \n\nArmed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.",
  },
  {
    id: 17,
    title: "The Promised Neverland",
    image: "https://neverland-animeusa.com/assets_2m/img/comic/img_cm07.jpg",
    price: 12.99,
    category: "manga",
    description:
      "At Grace Field House, life couldn't be better for the orphans! Though they have no parents, together with the other kids and a kind 'Mama' who cares for them, they form one big, happy family. No child is ever overlooked, especially since they are all adopted by the age of 12. \n\nTheir daily lives involve rigorous tests, but afterwards, they are allowed to play outside.There is only one rule they must obey: do not leave the orphanage. But one day, two top-scoring orphans, Emma and Norman, venture past the gate and unearth the harrowing secret behind their entire existence. Utilizing their quick-wittedness, the children must work together to somehow change their predetermined fate.",
  },
  {
    id: 18,
    title: "Seven Deadly Sins",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Nanatsu_no_Taizai_Volume_1.png",
    price: 11.99,
    category: "manga",
    description:
      "In a world where injustice prevails, the Holy Knights of Britannia protect their homeland with their unparalleled magic and strength. Their most sought-after targets are 'The Seven Deadly Sins': a group of criminals once regarded as the strongest of Britannia's Holy Knights. \n\nTheir supposed conspiracy to overthrow the Kingdom of Liones led to their defeat at the hands of the Holy Knights, but rumors persist that the seven infamous knights still live.\n\nTen years later, the Holy Knights ironically stage a coup d'état themselves and capture the King of Liones, installing themselves as the new rulers of the kingdom. Elizabeth Liones, the third princess of the kingdom, sets out on a journey to find the Seven Deadly Sins and request their aid when she stumbles upon a bar owned by Meliodas, the Dragon's Sin of Wrath and the former leader of the disgraced knights. \n\nThe pair sets out to find Meliodas' old comrades, but will it be hope or despair that awaits them in their travels?",
  },
  {
    id: 19,
    title: "Demon Slayer",
    image: "https://m.media-amazon.com/images/I/81ZNkhqRvVL.jpg",
    price: 11.99,
    category: "manga",
    description:
      "Tanjirou Kamado lives with his impoverished family on a remote mountain. As the oldest sibling, he took upon the responsibility of ensuring his family's livelihood after the death of his father. \n\nOn a cold winter day, he goes down to the local village in order to sell some charcoal. As dusk falls, he is forced to spend the night in the house of a curious man who cautions him of strange creatures that roam the night: malevolent demons who crave human flesh.\n\nWhen he finally makes his way home, Tanjirou's worst nightmare comes true. His entire family has been brutally slaughtered with the sole exception of his sister Nezuko, who has turned into a flesh-eating demon. \n\nEngulfed in hatred and despair, Tanjirou desperately tries to stop Nezuko from attacking other people, setting out on a journey to avenge his family and find a way to turn his beloved sister back into a human.",
  },
  {
    id: 20,
    title: "SLAM DUNK",
    image: "http://st.cdjapan.co.jp/pictures/l/15/13/NEOBK-2262585.jpg",
    price: 19.99,
    category: "manga",
    description:
      "Hanamichi Sakuragi, a tall, boisterous teenager with flame-red hair and physical strength beyond his years, is eager to put an end to his rejection streak of 50 and finally score a girlfriend as he begins his first year of Shohoku High. \n\nHowever, his reputation for delinquency and destructiveness precedes him, and most of his fellow students subsequently avoid him like the plague. As his first day of school ends, he is left with two strong thoughts: 'I hate basketball' and 'I need a girlfriend.'\n\nHaruko Akagi, ignorant of Hanamichi's history of misbehavior, notices his immense height and unwittingly approaches him, asking whether or not he likes basketball. Overcome by the fact that a girl is speaking to him, the red-haired giant blurts out a yes despite his true feelings. At the gym, Haruko asks if he can do a slam dunk. \n\nThough a complete novice, Hanamachi palms the ball and makes the leap...but overshoots, slamming his head into the backboard. Amazed by his near-inhuman physical abilities, Haruko quickly notifies the school's basketball captain of his feat. With this, Hanamichi is unexpectedly thrust into a world of competition for a girl he barely knows, but he soon discovers that there is perhaps more to basketball than he once thought.",
  },
  {
    id: 21,
    title: "Jujutsu Kaisen",
    image: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
    price: 9.99,
    category: "manga",
    description:
      "Hidden in plain sight, an age-old conflict rages on. Supernatural monsters known as 'Curses' terrorize humanity from the shadows, and powerful humans known as 'Jujutsu' sorcerers use mystical arts to exterminate them. When high school student Yuuji Itadori finds a dried-up finger of the legendary Curse Sukuna Ryoumen, he suddenly finds himself joining this bloody conflict.\n\nAttacked by a Curse attracted to the finger's power, Yuuji makes a reckless decision to protect himself, gaining the power to combat Curses in the process but also unwittingly unleashing the malicious Sukuna into the world once more. \n\nThough Yuuji can control and confine Sukuna to his own body, the Jujutsu world classifies Yuuji as a dangerous, high-level Curse who must be exterminated.\n\nDetained and sentenced to death, Yuuji meets Satoru Gojou—a teacher at Jujutsu High School—who explains that despite his imminent execution, there is an alternative for him. Being a rare vessel to Sukuna, if Yuuji were to die, then Sukuna would perish too. Therefore, if Yuuji were to consume the many other remnants of Sukuna, then Yuuji's subsequent execution would truly eradicate the malicious demon. Taking up this chance to make the world safer and live his life for a little longer, Yuuji enrolls in Tokyo Prefectural Jujutsu High School, jumping headfirst into a harsh and unforgiving battlefield.",
  },
  {
    id: 22,
    title: "Tokyo Revengers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Tokyo_Revengers_volume_1_cover.jpg",
    price: 10.98,
    category: "manga",
    description:
      "Takemichi Hanagaki's life is at an all-time low. Just when he thought it couldn't get worse, he finds out that Hinata Tachibana, his ex-girlfriend, was murdered by the Tokyo Manji Gang: a group of vicious criminals that has been disturbing society's peace for quite some time.\n\nWondering where it all went wrong, Takemichi suddenly finds himself traveling through time, ending up 12 years in the past—when he was still in a relationship with Hinata. Realizing he has a chance to save her, Takemichi resolves to infiltrate the Tokyo Manji Gang and climb the ranks in order to rewrite the future and save Hinata from her tragic fate.",
  },
  {
    id: 23,
    title: "Gantz",
    image: "https://upload.wikimedia.org/wikipedia/en/1/10/Gantz_vol._1.png",
    price: 9.99,
    category: "manga",
    description:
      "Lonely high school student Kei Kurono isolates himself out of a growing cynicism toward his fellow man and the cruelty they are capable of enacting. One day, while waiting to take the subway to school, Kei's classmate Masaru Katou leaps onto the tracks in an effort to save a drunk man. \n\nDriven by an uncharacteristic desire to rescue someone else, Kei follows Katou down into danger. While successful in saving him, the two boys are killed by the train.\n\nKei wakes up beside Katou in an apartment full of strangers and furnished by a giant black orb with a glass-like outer surface. After finding out that everyone in the room has recently died, words appear on the black ball tasking them with killing a strange creature. The ball equips Kei and the others with power suits and mysterious guns before sending them off to collect this bizarre bounty.\n\nAlthough Kei discovers the mission to be far more deadly than originally suspected, he manages to survive. He is teleported back to the apartment where he and the other survivors are rewarded point values according to their actions in battle by the black sphere, which a fellow survivor says is called 'Gantz.' Despite his death earlier that day, Kei is granted the ability to return to his daily life with one condition: he can be uprooted from his day at any time and summoned back to the apartment, where Gantz will task him and other recently deceased with the assassination of another target.\n\nWhile Katou dreads the inevitable return to Gantz, Kei finds himself living for the sole purpose of carrying out these missions. Thriving in the heat of battle and learning to care about himself and his comrades, Kei faces escalating monstrous threats that begin to bleed out into his normal life outside of Gantz.",
  },
  {
    id: 24,
    title: "Fruits Basket",
    image:
      "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/2351/9788415108443.jpg",
    price: 9.99,
    category: "manga",
    description:
      "Tooru Honda is an orphan with nowhere to go but a tent in the woods, until the Souma family takes her in. However, the Souma family is no ordinary family, and they hide a grave secret: when they are hugged by someone of the opposite gender, they turn into animals from the Chinese zodiac!\n\nNow, Tooru must help Kyou and Yuki Souma hide their curse from their classmates, as well as her friends Arisa Uotani and Saki Hanajima. As she is drawn further into the mysterious world of the Soumas, she meets more of the family, forging friendships along the way.\n\nBut this curse has caused much suffering; it has broken many Soumas. Despite this, Tooru may just be able to heal their hearts and soothe their souls.",
  },
  {
    id: 25,
    title: "Rurouni Kenshin",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/cc/Rurouni_Kenshin_28.png",
    price: 9.99,
    category: "manga",
    description:
      "Ten years have passed since the end of Bakumatsu, an era of war that saw the uprising of citizens against the Tokugawa shogunate. The revolutionaries wanted to create a time of peace, and a thriving country free from oppression. The new age of Meiji has come, but peace has not yet been achieved. \n\nSwords are banned but people are still murdered in the streets. Orphans of war veterans are left with nowhere to go, while the government seems content to just line their pockets with money.\n\nOne wandering samurai, Kenshin Himura, still works to make sure the values he fought for are worth the lives spent to bring about the new era. Once known as Hitokiri Battousai, he was feared as the most ruthless killer of all the revolutionaries. Now haunted by guilt, Kenshin has sworn never to kill again in atonement for the lives he took, and he may never know peace until killing is a thing of the past.\n\nNow in the 11th year of Meiji, Kenshin stumbles upon Kaoru Kamiya, owner and head instructor of a small dojo being threatened to close its doors. The police force is powerless to stop the string of murders done in the name of her dojo by a man claiming to be the famous Battousai. Kenshin's wanderings pause for now as he joins Kaoru to clear both their names. But how long can he stay before his past catches up to him?",
  },
  {
    id: 26,
    title: "Heartstopper #5: A Graphic Novel",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1338807501/1.jpg?width=810&maxHeight=810&quality=85",
    price: 35.99,
    category: "teen",
    description:
      "Now an acclaimed live-action Netflix series!*Boy meets boy. Boys become friends. Boys fall in love. The bestselling LGBTQ+ graphic novel about life, love, and everything that happens in between: this is the fifth volume of the much-loved HEARTSTOPPER series, featuring gorgeous two-color artwork.Nick and Charlie are in love. They’ve finally said those three little words, and Charlie has almost persuaded his mum to let him sleep over at Nick’s house. He wants to take their relationship to the next level... but can he find the confidence he needs? And with Nick going off to university next year, is everything about to change?By Alice Oseman, winner of the YA Book Prize, Heartstopper encompasses all the small moments of Nick and Charlie’s lives that together make up something larger, which speaks to all of us.Contains discussions around mental health and eating disorders, and sexual references.",
  },
  {
    id: 27,
    title: "The Reappearance of Rachel Price",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/0593374207/1.jpg?width=810&maxHeight=810&quality=85",
    price: 21.74,
    category: "teen",
    description:
      "#1 NEW YORK TIMES BESTSELLER • From the author of the multimillion-copy bestselling A Good Girl’s Guide to Murder series and Five Survive comes a gripping mystery thriller following one teen’s search for the truth about her mother’s shocking disappearance—and even more shocking reappearance—during the filming of a true crime documentary.",
  },
  {
    id: 28,
    title: "A Court of Thorns and Rosese",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1635575567/1.jpg?width=810&maxHeight=810&quality=85",
    price: 19.09,
    category: "teen",
    description:
      "The sexy, action-packed first book in the #1 New York Times bestselling Court of Thorns and Roses series from Sarah J. Maas.When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.",
  },
  {
    id: 29,
    title: "Taming 7",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1464216053/1.jpg?width=810&maxHeight=810&quality=85",
    price: 18.99,
    category: "teen",
    description:
      "Taming 7 is an epic and unforgettable love story in the international bestselling and TikTok-phenomenon The Boys of Tommen series, from Chloe Walsh.She's the quintessential sunshine girl. He's the lovable class clown. But storm clouds are rolling in, and this Tommen boy is about to get serious.Tommen's cheekiest lad, Gerard 'Gibsie' Gibson, has always been a comedian, but most people don't see what lurks beneath the surface. He is haunted by events of the past and he uses humor to cope, hiding his true self from the world.",
  },
  {
    id: 30,
    title: "Taming 7",
    image:
      "https://dynamic.indigoimages.ca/v1/books/books/1250268435/1.jpg?width=810&maxHeight=810&quality=85",
    price: 15.09,
    category: "teen",
    description:
      "#1 NEW YORK TIMES BESTSELLER! \n\n Stephanie Garber’s THE BALLAD OF NEVER AFTER is the jaw-dropping sequel to the ONCE UPON A BROKEN HEART, starring Evangeline Fox and the Prince of Hearts on a new journey of magic, mystery, and heartbreak\n\n Not every love is meant to be.After Jacks, the Prince of Hearts, betrays her, Evangeline Fox swears she'll never trust him again. Now that she’s discovered her own magic, Evangeline believes she can use it to restore the chance at happily ever after that Jacks stole away.But when a new terrifying curse is revealed, Evangeline finds herself entering into a tenuous partnership with the Prince of Hearts again. Only this time, the rules have changed. Jacks isn’t the only force Evangeline needs to be wary of. In fact, he might be the only one she can trust, despite her desire to despise him.",
  },
  {
    id: 31,
    title: "A Court of Mist and Fury",
    image:"https://dynamic.indigoimages.ca/v1/books/books/1635575583/1.jpg?width=810&maxHeight=810&quality=85",    
    price: 19.86,
    category: "teen",
    description:
      "The seductive and stunning #1 New York Times bestselling sequel to Sarah J. Maas's spellbinding A Court of Thorns and Roses.\n\n Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.",
  },
];

export default bookData;
