This is a project 1 for the course "Cyber Security Database".

This app is purposely build to have a weak security. 
In the code there are proposed fixes to 5 cyber security probelms.

Instructions for installing and running:

Clone the repository to your computer locally and then:

1. go to frontend (cd)
2. go to bloglist-frontend (cd)
3. run npm install
4. leave the frontend side (cd .. x2)
5. go to backend (cd src)
6. run npm install
7. set up MongoDB

How to set up MongoDB:

1. Go to this link:
https://www.mongodb.com/lp/cloud/atlas/try4-reg?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core-high-int_prosp-brand_gic-null_ww-tier4_ps-all_desktop_eng_lead&utm_term=atlas%20mongodb&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=22031347578&adgroup=173739098633&cq_cmp=22031347578&gad_source=1&gad_campaignid=22031347578&gbraid=0AAAAADQ1402RQvw9q4OJwZP6VO5GtZ_qL&gclid=CjwKCAjw46HPBhAMEiwASZpLRFKN7DMtT7IqoUSBUkCW3rOqDDmtJe0PZJrqOr2AAqQhL_6IIgeUNhoClzQQAvD_BwE

 2. There follow the instructions to set up a free MongoDB usership.
 3. When creatiating an user and password keep in mind that those are going to ypur .env file
 4. Allow connections and IP=0.0.0.0/0
 5. Set up the database  go to database -> connect -> drivers
 6. copy the URI that it sets up: mongodb+srv://<username>:<password>@cluster.mongodb.net/bloglist (put your username and password there)
 8. Then create an .env file in your backend (in src file!)
 9. Set up your .env:
 10. your env file:
  MONGODB_URI=your_mongodb_uri
  SECRET=your_secret_here
PS! SECRET can be any array of letters and numbers!!

Fix for problem 3 may need also
test database for testing environment.
When this needs to be added in the .env: TEST_MONGODB_URI=your_test_mongodb_uri
for this it is needed to add a testBlogApp in MongoDb cluster, but 
THIS IS NOT NECESSARY FOR THE APPLICATION TO RUN.


Also try to run the backend in http://localhost:3003/api!!

After this just run npm run dev in the src file.
AND run npm run dev also in the bloglist-frontend folder in other terminal, because
frontend and backend need to be both running at the same time.

Something like 
frontend:
http://localhost:5173

backend:
http://localhost:3003/api



Windows:

if npm run dev isn't working, try this in backend package.jason for "dev":
"dev": "cross-env NODE_ENV=development node --watch index.js" 
 



