[![Build Status](https://travis-ci.org/telemark/fint-get-data.svg?branch=master)](https://travis-ci.org/telemark/fint-get-data)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/fint-get-data.svg)](https://greenkeeper.io/)
# fint-get-data

## Use with cli

```bash
npx fint-get-data -u https://play-with-fint.felleskomponent.no/administrasjon/personal/personalressurs -t eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4R0NNIiwidHlwIjoiSldUIiwia2lkIjoibmFtLTYifQ.Ou5nxPk9Eh1Z9iI2HJiee6lOdlTVsr4R.TJejzao5PEIaP9k9.jzHBVfU9fvxv2OvLlL7erwwfz1hHWzVvoK1gyeKqUQ08tA6bx2qlKrDGZfJnh0PaDJt1jmPrUAWPaV734Rs-wfSkBRzFzC9AxyEwfRNgP3RBG_C3QE2i0OHbz1KBRdGg8QoQZVvJQZwRXXDp9RA0KFa0-xFdKlplKRa-1I8qkIZYq6V0sBza35aB7bdK7vEmZ42DdVO3RiP_IZTLUZuTpFi53HXs02ACoA-NjKlSobOlDXzZpwoHzegLA_xxl4V7lpx3wqdY6MJMrIo9-4faJzTd4rDjitvCT6LZH-hC7peQpulE_-Z71CPoqubw9EM-yCzD0F1vasXE9epG2X7woA8UY5KI86kon9arOpMVfFJKva1x1Tpz6Yc_F1jAMBPVU7y34a1AjjSD8CRd0EA92HddcwdveWf_e7U3dFA0F4BDuWQeE1Rv2FM0jH5e3f6Ra0rmMrd9tki5-vqDdq1LGZj6cetLKZy9gnr1ixfoSP_ErdB9J5bdz73FoR2hWMR5oZ0XJAZrzchVRd_exBJV9Hkc0e1qqitF4IuY_RLj8cPp7hBIpRGL5oYx9aKAHUCnkCbgfZt9ATzs6lYuSarJybZQu4yOzvFyG4_O1yZmRBb7eBIQSJ2x6LLU1qLB8mynfhokBWeM3zHE4qSHUpy8p3L5mNbWu37dnqhTL6f7OujI4hLURNfRuLu09KlUgKuKsjK5jIuYy7LglB04zsFPEz4GCN60zdYmFcbe07cJWUIGRaeg8iZSS1FN9x0mQ4RsRUWUZiqVHXMB6GyKq0iygH90d_oyTxUKlz88cdxS4v0d8rfoN9AEug2YwgqTgqqsVChUzVpd4nTLKMiPvg39hqBRsbJaN0OmHiBuJtui62kVcMEv08BNlxrmm0BRNWrUg3eFyDNT1XiX4vWJLWsNM5DkJK9YQXKHV5W41Fd4DntPyVlIYnREZ-ktT_71HKvnSBlm6l-jEqN73tvB5jtAGO3d2mnxH1wy7U0pzlT3_BL-1feX4Yl07O82mJztU632aIR450pGo_mhabi0nk3c_SMuOKgfhaN63Wv0-KEwKKvkXwLFK329gDl1mSviYtUdjpcH7H_FdsQ7LZ4rY0VCO9jsP1W4jOsnJGWbKhnn950eg94iZi9ecjERCrM9CaWUBupCfMvkpIZp45sbxewRwkW37ZZmz4XoqM43Vlw0gDtvy3MK_g_HZFZOMNoB22TVwq4_10eUQDq6m9ZaACZNRfHj-jk8Q9a4QVIr1GIgTkfF3p3LFn4UxFoEMEWWp0zuGdrmDaTFRvwhYfLVSRY-puNRZsrAKd2NfJ5jToIDT4VQfSOWfdd4vDRAl8NVkEuzWzblO73HN4nd5RVpwly2bX52UehuUsmvi0EjxklSPBs7aR3IE68VHTRnrR5ihhdO0QtjNZjmx4ESwByHTmhvds2rcbg3DxftXHqzLAWnwMYDmUkQYCd8sTjUKhPdw-EbDglHcAceMDJbXJ_z493UOQ2SkAxPh_RPmxZVgeNPBmS5ENj8kffRfgnSJvlc1hvUa0KbhrM-jqaSlfO9X6QHg-mgiIzwX3FXyzwWCBAkgHym7rQMTom44FYnrj03VoexbIfMvilNthpFhaPd7kp2K78yDO6v8tLBamNaezZjSxDnhZxFnImkMJdF6x345nA3fWpw7VTne5ZqK5hj4iyFVwSY556XBdMwci0SDE01X1tgXjaA1vuZomqlOeDURKfGT4xNUnlhX5QOx4YTTKDWYiEfwoMwKWj1blo3VImIJiZaexiKISVXerXLR3Ch0en5ocvCXH0mj9BTIPkeWllx7LVe8TSN5T-FtTxOXK3B40fhtGD8RFqWFTLd7rrXgMr5aRpQ.CYg1LWhcCBN94PCYcMTjGw
```

| Option              | Description               |
| ------------------- | ------------------------- |
| -v, --version       | Output the version number |
| -h, --help          | Display help              |
| -t, --token         | fint OAuth token          |
| -u, --url           | URL                       |
| -o, --org-id        | Organization ID           |

## Use as node module

```js
const fintGetData = require('fint-get-data')

fintGetData('https://play-with-fint.felleskomponent.no/administrasjon/personal/personalressurs', 'token', 'orgid')
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.error(error)
  })
```

## License

[MIT](LICENSE)

![Robohash image of fint-token-generator](https://robots.kebabstudios.party/fint-get-data.png "Robohash image of fint-get-data")
