import styles from "./ins_app.module.css";
import { Fragment } from "react";
const zlib = require("zlib");
/*var AdmZip = require("adm-zip");*/
const pako = require("pako");
export default function Registrations() {
  const handleFileDownload = async (type) => {
    if (type !== "zlib") {
      const file = await fetch(`http://localhost:5000/${type}`);
      const fileBlob = await file.blob();
      if (type === "compressed") {
        saveAs(fileBlob, "license.zip");
      } else {
        saveAs(fileBlob, "license.eztlic");
      }
    } else {
      const file = await fetch(`http://localhost:5000/${type}`);
      const fileBlob = await file.text();

      const input =
        "eJztvVez7La1Lfz+VX3/QXUe7kuXxZzq2q5izjnzxcXUzKEZmmz++tt7K9kKRzry1rato1WrVjcAEiAAYowxJya5/swn3t+0Jv8iKJe1mca//Bf0Jfhff/3//78vvvgzu6/bNJTLx9Q7LXN/HdJla9a6S/8MvFNf5xvpUP5V/1AyfqGnRTquXfNn4GPux3qAf6joz9YyFXu+rd+c/nX6C5n7y3+9r6bZ+nJF/uvr0m+q/6bg7+r9WPj1Zf8V+RL8M/BN4uuKga9r/u8awn6qoS+Cn2oK+x82xE7js1y2H2np65JP19RXl+7U01VuVr9XzfjT/fuq/Iv7tHzx1QlfsOmSTeMX7FSUy6e9IoT72/MHV4Jwv9FI4z850vhPtYT/qm79SENfF/zKdr5NfbU4/iylS3GkSylz366W77I+XgpIgjhMchbEESAnipoBe97fXdV7ZZfjWn7xdbX/uMS+ydXSrOzfBeNWLvPSrOV3FXxY9eN9+uv/6bf/+67rw/d/RIr/U23/90PhN0v840V9ixLfFn8YjQ/fv4cSH4qAb8o+Jr6p55uMX9Ldb46VV24aq/5jZfe0X8uPNf597ocM/pybpeTS7WMOAn4JwV9CJEV9PPgfCz9kffjOLuX7b/EhC3oDDfklDELgx+O/V/ohL0j75mNiW/avruDbnA8pp3w2H4bvY+PEx/K/z/o4ltMw7++5+Lbv/1jdjxd/LPputL7J+nFw/ab048x/SHw39x/r+Tb/F3ToH4cMgr6EwO/G54fj6e7zPC0bPxbf5IL4l+9fGCK+moIfHvAx++uOfJv++m78kH5z0Yd79O/uWbV8/RW09xZ6URZQMFoX2Ae6I3fTFm8kPN1BCS/XFRjnYuGPB0mKOZ0V8elbk++GgMKPzwF9wCNxZAsPpexwL9vrcRUnouYpP7tTK3D1zW3gFK+fzym8FEox2yGeCA7S9HB8tRjbQn133wkhanMS6F4X1YmsVNj7nJFxt3k1ZxUQezWM6sh1uT9NXsOuUCqkmtT0oLqNJeWJXnrru8lCu8LgCYZCyT0DVxuQWyONsJlHX9fSDBbEGu39SgRv4FRFu+lPnU6nLoPnh4AqkNrZjRsMXEGgHO1QENtQJebGJWJVMTqeRp+aUs1EyCAgbS1Wts+M2xFwxEsXDesUK2UH4ovYpCF4ps8aQRI8amHE8zvO53n4mVK8RZUFMBPKU+zwakI2CnxWnEHMHuFTS/EwaOT0x3VYe2Hhg7YCrJVV2hfuMWeePcGaNbImCrIWJ0/kNeT3ollmGIceldhk0OCHyqgq5sRSMLPQLpk91yEE+LZsqDqXgb6mB1SfEs8H9PrGt5V2m4BlPjIBk0y6BFOw5ISnq0WdksZ6T3QJlNgrCHMdsfXF3TzIMrgZmA8vgpY8Ek4vWdQuVy6bSCawZnWRjVKPb3DfdDWePRkNINqVFOTTwqoZIkwLZIL37Pg3N/D41/JAFC/UKUuair6QsuMh7RmQjOqhcx5P0y/uYTUsfo0gNszlXS8abBELN4zWzAQMBJ8T/o6EJRiez5QLX5Z88rFQueekz/ZREsPYU68qB0b1hvdlIWrgbJbVTZLmPB2L2/qevUMWLRBScIfLYinb9i5fOTZvA0AQ9zugTBxT+9BFLnc+ka2nz44xwgNoFU5yHpLBjb6LmZFjBshKyXhxx6j0L6seGurh+Vh8RxevgIphox7yk32V1YOPLyPgpxv9FMLtiihlG9qdG0NufHeP1vgQDXGG1DdE0wnM3kK0FsD3vWld7Tk1cmtR06JNDxJqLLMnW+xm1RkrhgS0rjJU0zEY9fe789pfXud7RnyhjeTRS1Dkrzx7OCyCaJDqbPk8rVm/ZFUZRAuakZWjiGVI1SpYdns/aWviHUST/+XPwAdY+EeUgP+qe/RL5+LzztHo+/Nl8o6t+zai847kgKep947/8Uz4O1YFvqbVbzn8O9z9CZp2YQw0IlBCYYwkcPqXMTT2Iwz970vN3+/i52TlNyWD1AfWwT8BK2PIv4SVsR9l5X+Sjn92ID8fHUPcghoeTjRo25j3GFb52+228YdkmldHpdJV6mmoBf4SWvd9md1bfim3TE65C+bGF5wo7bp7nELAgBpKb3ZVZgFlDQfXK096Raq8kqNrJA94zxlIcjb/4Gjrctvg7t5ryUVBPofVrZwsr0X8PhSFhmgtIRQq8KU+2ku2zt0nwHbQieMheGNDUy5L4CC9VTqqCJtIG9kI8Yc6r1ojzX4uWkVo7hHLQfc3iuLwskW48oRD+aX2iY3ik/a6vUHIQh08zsQEELoWT3kOpQfs/ggE38NSNrG4JUoXiw9GHL6Ft5bSg4hCBpohskLH9oTApX7Pua28V+RLmu++8XQJKrhfyMMnbo59d5bd0s665hid6WPoVJ3SZqYnNDimYuxPUgekvEFIW4PmQH6i3eTkFYCwGbjTd79UVcho1S0UyJmWWMOrxzTdTykN28vm8Kp7nnJYNPDLuQ1owqCbzgyCi7yRdkI4/iEmhAzFIhE7AjAtq2ofC6ZWVRAdnYqmgzBeFOOQr0A1SoUi1171Eq803EtRI1qbLNhPmX6MN8gurelCAcN5KOiOtTObDawo39Nczbi6ap3gdIZivw+eiTgQB+/D+fIZYpfr2gC5me/E7bQ9SskGZUDPcA77WyA7N8K4xweVvtblaPS2GhMfOx2xdr01otV0r0cKHOcz8+7n7OEqzMyWfH/se/ZmFAScLPGZ83SM3oZmvXUVE9PIIWo1xZMpEflhFXLPayLeQiOGoS3nebrq6NZ7HbflpTZnz8i6WCz3+QXcwvhRv5os8y3dphKqUXR6n+xZzvIml87W5gIJWzhC9B8CQsONyTa20uSu0b3p/UW+hdVF8zKzlqO2Ue5CKpt2eyuOhtUYPNFudfbcTUwgkX68K3BcCIOjAoxBDiiFi0OTbjrfgUGHACxBgAZM84V1sBfmO96NFg3Y7S16LP3udR62Z5AocIMMht3G4RQa35RyZgkeQaBJjxHrr/Fh3aQGt2MOmhVDirtd4jquEC2PagpKwi45vwVtkBYPCmAcJmBkbWHQn6NdQX8ZHmOGHCMbnAyZXA7b9l/+8jOU+1PE+a2v5XvMaTnmH8z5+2POb6f7B9T5nvDfD3WajBZvKvZsSCkR5y2+JyHD3lmWk9SJr1zyVUB34v5UGc8wIMBlVazVn6tWO1y0409iyptHEss3wK3YDrIfexEmhAlq9WMBax6iA+1OwsihJoG1VVn9fKSn2gglPRHo2U8FCM9xpD0Wh5bronm+Xjlw5vbNtVu56LhQUmCwNuHxWU1tePjSFNvm4bCDLUky77WmFOKNdjcMsw2ywSPQqlqR8Mn77hs9ltvOXGc2cpOaKUVWU3Dp7MEO80rB1AaKXKxeoOgVQI6CqBVX16To2ghHJnwF0aS9DfINsR78IwiJV7+52ejXHchnTBedh6Vh/bGpTB4ghFBGNUWcXjqESg8Hff/Ugna+kyOhEpZjrMCxPkcsg0ztTMyz9IED3d7mcWDKDWELmc6oNdaRDTjNC6PoWZtYvoXpTRsSD1zJWtRmbTmXbutdtPs4Eht5Hxg+vcUh/LodLwCeESfhX4h/75Hxnkwlbz9T0h6H0etWpW5Jny9j8qTlU7Jf3rEAEbiYFapp5iJBQZLcx3Ot2nEzHhQ5ShSrbnbsorGMTrp6V2NtcOUOaQN52+BlT5RyvLnh5C89JJZS1j4v3V/a6Lw6NKFKq7kTLw1pvIuNsrNbGdPChsmk1QxuT6vjbS29u+Ebhl/oa8ohznDoaN1frybRXiB2z+bRSM6XNTx7DmM6+OybQKHb8x7j80CBWHxj7ri3HfFjYvRXRff6w8F4DbbxAe4SC46r0Q9U5ub1ncpaxG2R46oObcnnjlaFhwHfdXrq35oliSu6aUHqfNu/FQ52AwMg2Fpb5ZnksDJrj/ZeI0uiPeNxYvc7XE+ZTDSSmrXtHQLN5YkLZyvsWciqmof00abF45J7h1ZNvmMxIsSk9XFte3P3Y3GLLvugJmzpYGbAX3tcUjnaUPRAFQWwBkZhgJ5t7PPkYO4rya732KG3YJjNy8tNSXqLQ1YJex8Uh5nEgYOf3UJ30SCyIyF/MOejcGe1ZG7Ocd8rDQ13U2VdkprPBy5BVUBm3nngSbgAF+Elm2AvOkoXt75lj798Xvr8sf2D7zOpzn5d8uUfjPr7Y9QfuwN+SK7f3QO/H5IlGCiOWKmDONA3oH4Jzec8MNdEkWazkPwxNedbuV9GjGOoB6oGcmZOGXiF9QYYkwT2Dr6VUglrHfuIFyMNqJEs4v2eNaN+rFl4XSHR23Cqy0ok0+KBqrMbbApPpE9sfyjS5rijjUiYRMLl8gLHVTa9FG0aWrKJ0K5ezKNu3fT1wBJoevKbxqmMdWxPw7kEYpeUskAzw48KBjetBH3QI8FafO7GPW/KnHkV8MONDeIB8mj6wEQWH+uJBGt94W5mSlE2cljlc0EdrZSUW50LxnTqSgtXfaTEgibBCmxVbNjdFN51bCuCLYpiTELbz8dskI8uCSgAPFmIX/xslEkJ0UlliB5rfx+rQIsxD2p3AIIIO0ERZ480qdLhqrTgh0o/6R2NNc7UfVc8j97yzyi3TTHcrsMRw1C4Y4XY9jSH9xe28aqhrwU8cjDp9LVsMJj48J+ppffn5GY76weaVShURU8bOmH2JBHjMvjgA7dLZbH9SPQdVrrErt6uvFEWERniWksj210H8q6i9RLRsjSTXX6WdhQ6hExyPavFKiPCg5SLe8fKq5hzBwJezxeST/E8uC+BrZysfBt5rCxN7tHguwvPqb7lIfzME1id80rDSz4uabyQsRuNHYnHA3RlTiiCkpAT5KdNiqSiCGAJgyt/3kRCb2nWtDJ5sTLsFSJueAq5ocUuRsg3vlbhcLxuguozJZZKrQgFR3nn/I2VElKLMls9PYRD6nAIsyEGtLVeuluy69HYYLzwaCys7ScnDY0NG1tPSxm/r+xYcQPgbBb1KZ5o5joP0XSkG9beA23psxcoyGx6wk7eQOPBZwvd7ufLxTvCj6+OP55EcEWlwh2aSEpLURUi+raFgfKJx1XoLrf0YjuupUVLI+S3KIv405YmLHPj9m4RmdlkvE8y41Nz32vJUO9o7TNw5KJDgykhTTSTG7DwchOMcmdm9uJM9KbnvOKAx4JmYwLfbsC01C6EuaeFWDcbwR1dyULxptOp3RHY0JEjCHGbabyYc7wDtrM1KULYJMZD2VzIyTOt0lLj2xqXhvVRNHiOk6DmZy0xRvS/hIS/2jL/vgP4m817hPuDfH+v5PvVzP/QGfzd3H9+0n2fAqLvcYXBT0u6L8Gkuil1QqePpensq1XC8iXom4gFcV1xn9md8M2NZuuKWJPI32pgGDlXTLmVdmNW7DTb4GdpF1DImlpMJKJSGAfaZTvE7mHwgrJM380kbpuZeoQA9CrCC0Te1jL6MktyoOuEgFmwG81u8Y91iuN+BB4+zl/O1ktoirwB72hPoffPuHuC9GjbYlTo58iwQTSAigFYsUmZZ0/yKZtAUiLRPC1icukcfsCEXal3cHbs6J6QyHRKpyT4kpwPJXJ0IUCl9Eo0oG3dUg4aiTRb8UbOavLJ1cbNiZG1HXo0gUU46ok8avfe0e8rDUjOkd1PUH4b3auMEzMRmeOwysXMjOSddaVEr9GXzpvHFZEpnKCY1hEqm9qLzaxtZN/UF8i8xo5OjBZU/R0E+R2dx/htnrfUnNQdKrs1KuWhTT39/J74cX2npSlMHZlMoNFRCphn8Bh41BTGyC+VSeO2GmOxV+D7I1W6mXnf+bBQafCKAykUYaTvwPcbuoLuzS1jXRnrJl4WaFRs3fPkqKyUKEcOXgRjZKSwTOedEOrqCHVDVnoi8Ansi5kytQYstliPMKk6lpreatr23aEuBl0BaDZVjyfOoQUIiRibjVtL9/l5MIYiLqQ6qMgk9W9SXcwxqOTlQVb0bWPtKglIysRf48iDFt8yQsLa/sPqBR2+ogXpGzQ67kqTLHKOjGijvGZ+3ZC95x43Q4IOwyT8JRZ6/hCoETC1pcLKBxg2hFNsEChF4CSWhz5YsatuEuYwB+q0dmk/R4IHGEArg5d0+RW8sEH67JJIJypbqB4PP3+syL412AWcM72NgCHdNDGe34JRDdHmlNGh9IbWMrkXxDyU8zzdmYXmly3uOOSaeFZAbreNTu7CGvImyPfYFE70qjo8f533hFIJ4IncOx6arpkMURp6AAzjG7My4AOGyt7TbMgAXK48IIbK8yYbLIKL6g8T7w2Mh3MTzEJVo+A6d/3g9r7VJQ/d+rB5voAVKEKuHtNonqG+xPY7KioZ8LbJ4Zl8GqIiuuGdVg7+rU1EDc2JWvQ44vHK8S46sfbZqLDsUm+h+bpuEAs/zbJfTGSVN/GEAO+nHMkGp2OGJ5D+JUM6j8U6X4F666PGlTD/nBMZ/4Hpu0x/sO7vj3W/ne4f2rnL9C+h2r8/5VNRLXfQ3/yw337jHEaH5JfmK6oP9Z72Nr7cq5C0gMcMHxLf+YLjO74WKEbYzaEWCLbj1bwWFHYAOZLmFaLLb37IK1MhOUnIT0cc1GYG8y/HF/wATLCEL9bCf4NqWKcOmEDxpYA5L7yNSewwJfksJMZNwtnTR2NOBQNNwHlO2kCIkXkKQmfy+mR1pSDWwHN026J34Vo1BWa0PJD+73844MPPT0h36fTeKHF4fXW4nP2W7xVidPzPSfZfFukBfViHFEzABKT9+kiPf/tYzO/39LMiDvzh+E+EOMi/U8DHpwnD/Dfyq/G0NU8p8erqBkGQY2MlbRUI/ykcEmxv+jFo8pYKl7UHbAZEYt00gcIfbHj1vtyRcYw2FAOkk3Sn2QT0b/VL73E+zrESBmRQd5RyDT14bq5+pb2l5Nmhfh46tJf8UF1WAbRr3t2Hx1Nwm9TIRT0QWsu1JB5nxIoNjwyjmJSSn7tw+nFUCPzFVQDdsCqLU1eosvwmb/pjKG/beN6UW0YsSZn0JmpvlMbfnm1+diyD4la1vNt+BccOdVah7Q0311daCwKbUfeHWSGYZCoPRl5H2smsN92cEdYplgvZHCyKzJSuxKuqU7RI7Wfe2EQMRSqqPSdtqJu7Loh7ZLFLNl1F3MntJCo9J18hpo6SAAAXMnpJZE4rYnvqZFI2syuwAfrmVYwsagPeyRRdvernIyEg3FytG0sEt+a4O/6tlYT7sWLlpCZrVcMMKAFwnVm46AvdRFpAMYYDckn3rHVh7gXgLXJN+pOM58irgu7Jmq1gc1BTe50ZWNnj6RnOid6RArUSCq+rwXoLZ6d37dB6Wo6++gOGhVbtp3pMGIRQG21G7YI2zJHibUFgDgvtYVCRWZFZVdpjHkuRhbexFlNVrgHqg2NMJZbiAlAAizhg1ic/LZz0dbP5GifvIDQ89jsVJlk1M8SyUpaBHLOHVIhGtZW/Y6zF4Nt11sCBwKg+q/ib3oLXo8B3q03wXpYdI2Ui7aYPxBPLVi1mQ3IW14hKJk8lL4/Knle3K4vVF0lxe6C3W6Z4t+IaBNSC+/bm4dWDvTWh0nR2wsawkrY+7QnCBQ/DRNihAu6s6aL3kasm8GjpKqTDMsY/BDsqNBi37ANwPPHSX+kDsS/vkoqbjSueX+UUJSoM86T1+CRJPu/2TYedutgWxWjA3utFoNUe2X3GvU0qZBl02Tm/xA5t94Fy4NxySK9zu5erdAAtF+Y1XMqzNaT08QxuT51CSejWQCOaaLiKl+e41LpSoJRLn/69uSscVylNZvLLhOw3ickXELFXTC1MFCHyF0gy5T3VgpB9Afo4GTExaZ7Ue+XOzYnIva1U0+l+kQ9N+OhDMz0Z0d8ry6N/1of2Cwg5RHX6TxovsokbezT7Oybk7/f0cxLy++AP7AFCxCcgZPjHCfkPXv17XkWrkTHKg33LZR5B0qYboWesgtmTbcMLjMcq1GZJAjgpUGymL83z4KyBMl95jMjnoM4LC2MDP+IdU6UjmOuF5M95vfFrohJpuNXZyD+fmbMZx12ZzKB/E/nZYD0cF1kZrA+uteRqcMlpf7G56T1IIuiRZzXdcBLCa9jaHQuHTXxj+sMhbwaORcNVSXERg8j9+UgZfnXoxKMuol1Vrz4Y5JHpKm8vbfjSUlHvNG+uOck/yzBgJHVauKqMb5kj3w0iYi0NBDh5v7tOyvebxvCqUFqS5g6510fESY17Tgk5kknANLcgIRd2d6WTlvjP49hv7jATqJz4LvtilwUDzW1cHhF4OVSvaMctwO8dE7O4XTVxU1uHNODpHfUjA4XPZeEfaIGZHbJ7JHdxQVUsGMwKYsGB/kSO4WoQcm1UdWOrdMAwb8NKYIrttuJYwdwW6iHdn7TYvoiZgt9wPvM4xMiZZkW16FFNxVn0urVMqlYlgzT6DoCEW3YTUpoGnr2gFOEys9No7kJit0nIim0zMPLuJKN0c4TRYJaXXIIjeeU2rx5ZvTqwlyOVeHWowJhUwsqx5tDRsATKr3nNtRf5BICMycEuaYJVRavCQawkSmdApqr4cND5LPaH98waPSAv2emN5aAOIr7tgX7cDUQ+Hm/5psUXJGLOe7k/i44auDxF4LOQJ9evDkm9RxID99CewK94iZsRtZFoF4fDdEG+FjyZNRR+V1VmxVtqofdl10OVaKFc90Ur52IxLAk8eIWNEMgu6+cJ9LBvb+5ks8uItRYLO2RyvSsJ82bhQQgtLgfqNU3t/YiZiWmVV/wOo2JSlPiNFpFyLJXbhVQp03WMcic3yX2d7NCgcTIdMtRKBInA7z53jFsxaanIK5LUrTTGHtrgSoV6gYqxXWqN8iSEc0nb+5IMI+GMETxuqCkj54JT1OI+6QCfRiv3l6nrnPSR4J2GqRa0T/joxNpNA2Z3Ufw75m3D4w7gmP6wdY0KHOfkfj5mMgc9n988PpBsaPbCwGHs439XzOT/eq77XxL6uGpscrAIOVeVhGL3jQymalQ9xWOoteqr0qeDAt2Z513j8wmoZALITmeobIKxDRGBlRWPcKUYmTZ3N7kC39aMBB7JQx4cogJpLDwx8FWxMaaeIFQMhsXwfjz2tqqB2P0lF1UMmxRd5P0jYZLzdWLXyqJk7q/snPEdyQz6kKfhchWzYHktdwc7JljlV4WiSkwRGywc69jwTDacLxvuCW+K5Kc3zMLNWWogTq2rhNYBOC87mnZsK725nHYWeoPfrK2mPoQEBt3gJxM8G340pXgiKO22Voh5GqdLS3BpAaHzRkrrmT9xcmTA6KVJFI+KjoLw87B09l5tMmASBznTzTJlO9LyYDKw5GJQBalwdOpMnmUye8JR1NNSvd5m4obzbPRK1hIVrkV2fC1qudC1MUyOmAwDPHXLSmuXDZ2tkkBE+KOyzTMDeIV5ZEkDn0Tf3NcNji3O6HbWGTzTITbs2GpluWpiQ/KnZM6yXeYQuhXzwvOSUACFrAP6A7iTjSTkD2F6ok3ccubdB0YH6NxGY9enUPV2ZkrtFI6xJb+eN3Fdy5a695bMAbTlv1VDGgclqeLJcSFc9BISbM/x++MsGFr2C7A8rBofRGbZzSixMnvRwubZcQZfVUl/ZVx2CeYToNhdDbcBqpHU5O8QmUIPmt/A6HQXsj0K0FHnMUv4YUytASq8wigEE+A4u+CUqXBPSQqiKQfvj8QWnnycqE+Fr/Np54wXFbQLlhN8swxwUSJHa46iOgthIfRwYjQ0LkZbfdqsA3E18/QFIbZbFCOft6mu2aRB1ilP0TwGK3M7WQLepy2EqNRXGkqx0Nc0QPZQzk1D9/eBLZasQBYA06wFg4RSOqF5mfc78NrxlxDYkCYdzyVksw7nn8jovyCzFowkgW+kgG86c5mtPUbQy41gAJtfEG7YaBrY2KSWZx4ghhGP04stexsnU2Ia4ftwOJi2oboyMWnQNiKwwwnLI0/STBFQFRsBweb4t2G2X2AFwihJgyBP/InnIB7lQe5PGAUTv2Nj8Cc6/Fl58t1t5ANPUp+CJ8E/bMKff8bu8rnKS/sKjHhUsYXMVd9mjxHsuLrXPBw4zbXScrZIuaCNwW48+rAFfGqpBPuIMOamCIdHoMTlpAKxi0qHNG9DzxV3kXCIWRiYFAS3klGWqAsXymMXZpskwK0XKoj3rZwSypwY39UZs6KNZ11DTMmny1AjTHa7ZGOwqxT1uzuHY/ThL70gkw17clENevDRiIjhCdCOOJwa4+n2NlvuXK6KU4iPD3Rn7zE0pHERGtm+wjF5OfZW89dNo4ygeouAjXs0wqQL/HDDFP0WjtEZZvyQ9bPn2KvrdexkZ7dCDvxaTJ1T4dJzs08hy/BMet79IQkjY5s2oCf1vRSNNp/RzdxfCNTnIW/gNkhXdbauTSBvQNCuoK/Ar/F6aTtDqQo5FUgLujJiIEPXPIfiaSoDm8RZjlhicV+ZmzNwc7Uvuim4Bb48Xwt2Q2Cj2UdzI0SfC2+QNNnQ7mEclYYx2crTo6YLWFGCRFEWpB1roknoXEWSaAOfWLApsfPIVecBH5kebcbuv2rubaLvrhOwlqcEnLjFdx20Cbqa/OGpsw9MuJyDSqZKPGjj4Rn7BjJEckpwF2zPhdXLHGP6lUOWXcBfSF2CCTkwow7c7xd+3GhcpW2nbc0suWbMBB9KYQTB6QO1tvSw73jZ+VaktzHXAO+Q8/j1ZDyT7O6WJI5XpL9Q7nybNkocE+BwYvnySAY+5lxbBwrffWx0KagJY8uurCiwM+MU+PSyABgxhHy0Yn1FOajNVkWq0m71GXjHiHIv1h7SzBGI5VM6JCrVcEorVrZTPaozWxxfDICGyPxi6Ap+kXi+WI8ePAGfuT8g3rfCW228eosCIu5lqNZl0+1majVc+xSEOvfXIYXAVrwKs4Pj3TBuTj8R1aoMEjMsToTtwtziMV9CM2yaalfPftdyq41yt3UnsMm0VtOue3btpNUVt7J6W7aWQii3cPFrqK2MlCQaoa6E1hNrTWevuc8rKL0Tbyp3DYHbkhus1gEe3wlFU30E4BPp0eFtn/3cY+wyaPL8ofM+ovkBr/s+6HgMr3k+prf5p/Cncn8KIwLiaRTkncT/HVPo93v6ObkTpr4Eoe8C7n4T7vxP3uCEyX8Yn39hYMUfG5y/4QYnZoVHLdwREc3xjn89X4/ZgJ/Re7qlPCgzxRIvCRJtNJNCPcLWJBpLWnpVekWWovi2SkILm27S9nDESDGYAWj23JAqEslvyP2IWmTWYe1GCXYBYdErVFa8aRxZIwAusNAdf5PaDExOR9LbKDcDZS1V/qBDy7ZNtnXiupPebMhRT5claD8fm+TpzVa5tqY5sTcjLWNOe1B3k2hBEBdBV+J38W1IRlZ2MndE3yoHhVUwIjhaY+pDdmeB0PumflugC/6gAigbiiwcXxxxc4UwgErt2IKHQEHhxOc3eozoqOwMem8qos74xtKe2qYY5mrOD9WGITUwFgh8McnojSOsK/LBG5KfJbIw/udscArLNPrSsdUzJyFq5+xup5du+u7uiMtjJAsrBxCEPS3e9lqtw7NfRoKH9MndxzsksTiUIsmjUSaYbRMm4fJj7zr4FrNjsT/ylbAjqNHOMKrl2zN7T70PdkaA3GNqLGfNUq2kAGwwdKW13IRXtLvvtgSZrpRW7nD6gVrUVkGMCAPk0v2k01Y6I4eFopDLT8fnQZ0P3LD3/7mHA34Qmuj3WzO8YewPMv29kumPhCd+M+mf3379vDGKrNEJvuYLugEmtuajLztgYi1IZL+t3iJX8Z2+iDXfx1xwCzRPYcJuex8PRR7vw1ow815QMNGvilGcjoTfvAxiwGQoxDQSHvqABQbYYx9iFBNhfmTBPLlgMtkI/fLhDkma7Qw4BjQF5pUL/f6W3/zPBCrSHwMVf/pZ31+HIL9AyuMMS/MIQ/2JpVgYokD2TwKICL9M0f8HQtBPdPezusSwf3iO5p9Doq/9ar/SJfa/GVDCbsW0gEdMLnhbxs5bMyue5nUvn+v1N9C8AedktIBRjV5HtMCHTL+C3wCDeD70BhobDDgfTn8FoJgieRpILxRDjOYvig9EZ8rc9UjZjStG+pV7yTMFg827aDDkKafs+9H1DCUZ+9YNYiy+AtAJat4IHT/rlM7rnKu4QOqfBZgDtjuDcTzjLd4gzvT1l+51h/2CRJ0zxH8eaFgFpf8UoBpvBBakir9bhPl+Pz8ntLxx5eOu9KeBFux3Ay2/ka/9p56nMLg61QL78rvA1oIJc6D5/WkEbj+/oaXmwzfcfICWUOhFLShEv3+boF4HOoJ/vbWK4Xs996u0ymBfphQIejAfcdiHZc/DodRdGjTBH7VK3z/0Sxh/QqssAYx9Cq3yjRuSN1SD57egdXTHx0KfEzTnnw5R+QEiRNEfWPBviwU//VxVFP3eYYB1ryB9myJ6APVvU6SQA8GG3p+849WM5gV8ENCvN0xgPpj4mpdfhudEmm+k+pW/4aC3XfDN9b8hDHjDufrihjr8OTpgMCXiBpo/t/atD2uf/G2W/i9QESAIMX9DUZR+/yGQv6EMQX/5C991/x/7MoUf7fNn9Z1gnxBKYPxf4jv5d3yjwm8VAnCrSRui0dqekSCD7OqWDhmPiWcOeUA6TyFuYj0Ah/IKMIPTKt45yawWA3FjEzTKUG+LpOW8Lbvn9GvUuOzY1NhU4MEcsFmr/CAtE4qqSgQq75ayIU9LiRj+gMzqvFO8kN/iVn3FRreg9FJhPDwl1eHR3lQSgqFZ9uRl7gUXy/PW+u0TUnQDrBfyIBpf22tWUG+UUIfX3XuQt7pv4gQs7C0cAwssbpdFriwRumXNlaTk2Uc7lCREdP2BqRouMBS9Js2CFV1719gjQnPJL3VSJU4rnWLAaznjIiK1W6+N26pe98FlluhQfT43BTJtaO+vLJk4Vk84O7GnakCjJ25GkmLraakrC0O4EEjSPcMYgXL3N+1ahM6XE9axFFkumTZjEwHrAvl0qeDBPICwMLEpYeW4Qo9CtsUqurO3wkKfl/jACtukOqePymViXBB8kM8w0AXTvcga2lfivGGQel30IofkeHUC6zK9GwfIKC2O4xCvpiWKYUjTaxsfZMRaAfAUoUQJGrbChYeNoyGiuEZz7vkLz9udQOQQEhgWYBCRKBmsjzLHd5GsZ7fXKlD3NEI4QH70TsmDGMA98Tz33JTMmJV+slMLQrAQ045dPrBhTdbeHAIMvQGRBl1VUdqzVSWmzMeQuzgPpBTUTRXZB1KlVPU82tualiyRRW0/EQiuDcR8bBtMIh09jedBxtjFp3Hsv6S9n9JiKgwZhXABlcUhOeAcW63oTlzmw04PWrtp1YrWGlQsxFOPioduOgAjXDe0rNVMzJ9AeXgv25WkduPQpfIeN3QKqqwjOLaEHixp1ZpOp246BIRyUII8jHuqz5SYazm2ZJdmLrqqBditqraXVIpptuUt5CPmiLgEDrThCCjRGDY7DLg8f5Cs90TjA35CZ1TVxkAqjVWpW1pU8oR3tkrL3N64wBNonidrCwW2hJNxWTnh2jLobBe3PyYXyLDI4knwzR7bqoi8xbtcQYmbiWRFVl5qcfrdC+M2MRRrFEZgE0kVksZk6oopSa/fPaJAcRdlBPScjtBF5sHyIHJ/vUdSXMFrSixbFcu+KhCtXX/+DfiH7it3g7NBOyBBg8uv6HJYA+T3/227FX/Q7u9ty+Iz638bFMy3jpddoXppPhSbvo28zX/b75RY82feDGRUC+hL7ztE86rrLeVtzT+gsI9BLSgiG5ql5Ffof10KjvhK5Jylptirw7RT5lLs0VTo63xkdvvqYZefR+8yWvdiXFfo1xwJsFDsFb+vUIPrERt0eAfuIaNTEoP7p16z8NtBy3/kS1r+gJXf05taPrNnMeB0TAsYwe0cXfMx0RcKWfMUNWwNX/MMz7k6+A0psNuBqOZ1l+Ep9sdPHoo0L9B9v1B/jWfxfwwpfLKaXPKGtOBbz6KNJJ/Ks/jroeQXuBg43aL/hOosHDqIiDG/cqOCX9dy3Jr3Gv73haLv9/SzohD0dTwG/AlQ6MdB6NdLlO8m7/MjymfeBvXaQnojCBe2RaT5+Zv4FVfzZMRrk1DzZcS9HE/zA9frilALakZv34jjF4bTvpHFhzwXrOX4Vzkp+Zf72t75yZgO9Vx0E+I3FJtcAfTRSekHj1BQRk88Jx8JJA/xkSLiLx/pW/+ruIoPIkUyQsex7J+Blf/eaSmdvBcwjOY5hn0pkd8akuHLn8RZCWN/Q0gM/RsJMdjfUBCFf6Gz8j/SXPqRzn5WRME/IaL8eFjFH9bSbwdEjh/oH3ZHgsBJ31JGD95C+S1lXmHPv97WkGf6PPaWMkjgb6bmC47fypfmJZHdJeyHcrtNvF9vLRlIzpJYcNWcDipTyRlCcjl13gqyz1NfSRtkNtyomD6jtdQGd/2qIEMgUd2XoQ//oMLg5E8hcXxdj38OiX7Kuvr3haCvuvU5MQcivgThT4U58K9TMT9uEQG/U72i97OpebWtdx+cJVvsQzP3hgPV/RgXajhhl7x1TOH5XIdogSCYAY++dYqhQzH4Zvg3s2OJ8z+HCaYUBcTjNyWDDbSI6iT3FfitRd7nOttHvdLWeNbN48+s/Z+P8+SD99WGP//q+B8s87/P+PCvwv8MvGnlb++T/vr/AD0LKkI=";

      const whatever = new Buffer(input, "base64");
      zlib.inflate(whatever, function (err, result) {
        if (err) {
          console.log("err", err);
        } else {
          console.log(result.toString());
        }
      });

      /* try {
        /!*    saveAs("result", "license.eztlic");*!/
      } catch (err) {
        console.log(err);
      }*/
    }
  };

  const sampleFiles = [
    {
      title: "x",
      size: "1.75 KB",
      icon: "blue",
    },
    {
      title: "Test Build",
      size: "44.53 KB",
      icon: "blue",
    },
    {
      title: "I have no idea",
      size: "31.11 KB",
      icon: "blue",
    },
    {
      title: "y",
      size: "8.01 KB",
      icon: "blue",
    },
  ];
  return (
    <Fragment>
      <h3 className="gray align-center title">Registration Files</h3>
      <style jsx>{`
        .title {
          margin-bottom: var(--offset-6);
        }
        .license_download_wrapper {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: var(--offset-3);
        }
      `}</style>
      <div className="license_download_wrapper">
        <button
          className="button button_basic_long"
          onClick={() => handleFileDownload("compressed")}
        >
          Download
        </button>
        <button
          className="button button_basic_long"
          onClick={() => handleFileDownload("xml")}
        >
          Download
        </button>
        <button
          className="button button_basic_long"
          onClick={() => handleFileDownload("zlib")}
        >
          Download
        </button>
      </div>
    </Fragment>
  );
}
