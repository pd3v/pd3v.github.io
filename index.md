## About Audio apps development and Live coding programming


**Keep the patterns pouring in!**


Simulating a wah effect

```
d1 $ n "[c5,e5,g5,b5]*8" # s "supersquare" # release "0.3"
# bandf (density 3 $ saw1 * (4500 * rand) + (300 * (density 1.0001 rand)))
# bandq "5.5"
# room "0.3" # size "0.3"
```
{% github_sample_ref /bwillis/versioncake/989237901cb873f96df12be48cbf1239be496bd7/Appraisals %}

[repo](https://github.com/pd3v/soundclips/blob/master/1.tidal)

---

Pop/Rock Pattern


	d1 $ every 8 (linger "0.75") $ sound "[bd, [~ sn:3], [~ ~ co <~ co>/3], hh*2 hh:1/4]]"
	
		
[repo](https://github.com/pd3v/soundclips/blob/master/11.tidal)

