const config = {
  "property": {
    "streetAddress": "10 Culpepper Crt",
    "city": "Caledon",
    "cityStateZip": "Caledon, Ontario L7E 5V6",
    "heroSubtitle": "Discover a home that goes beyond mere living – a 3-bedroom Detached that stands as a beacon of modern architectural brilliance. Spread across an impressive 1793 sq ft and featuring 3 meticulously designed bathrooms, this property represents the perfect intersection of form and function. Each element has been carefully considered to create a living space that is not just a house, but a true reflection of contemporary lifestyle and sophisticated design principles.",
    "backgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1761768039216-Culpepper 1.png"
  },
  "realtor": {
    "fullName": "Rick Roccasalva",
    "title": "iStreet Realty Group",
    "phone": "416 616 9369",
    "email": "rick@istreetrealty.ca",
    "photoUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1761767184484-biorick.jpg",
    "bio": "At iStreet Realty Group, we are built on integrity, insight, and innovation. We combine decades of real estate expertise with cutting-edge technology to deliver unmatched support, transparency, and results for our clients. With over 40 years of hands-on real estate experience and extensive corporate backgrounds, our managing partners provide a balanced and strategic approach to Residential, Commercial, and Investment properties. We prioritize clear communication and use the latest market insights to guide every client toward success—whether buying, selling, or investing. At iStreet Realty Inc., we’re more than real estate experts—we’re your trusted partner in building your future.",
    "social": {
      "facebook": "https://www.facebook.com/HomeLifeIntl",
      "instagram": "https://www.instagram.com/homelifeintl/",
      "website": "https://www.homelifepartnersrealty.com/"
    }
  },
  "brokerage": {
    "name": "Homelife Partners Realty Corp",
    "logoUrl": "https://i.ibb.co/v6VQqL9q/Untitled-design-2.jpg",
    "address": "3850 Steeles Avenue W. Unit 6, Woodbridge, Ontario"
  },
  "openHouse": {
    "eventDate": "",
    "bundleItems": [
      {
        "icon": "fas fa-home",
        "text": "Full Property Listing"
      },
      {
        "icon": "fas fa-video",
        "text": "Video Tour"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Rick Roccasalva Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://istreetrealty.ca/privacy-policy/"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        {
          "value": "committed",
          "text": "Yes, I'm committed to an agent."
        },
        {
          "value": "not_committed",
          "text": "No, I'm not committed to an agent."
        },
        {
          "value": "gathering_info",
          "text": "Just gathering information at this stage."
        }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in this Detached?",
      "options": [
        {
          "value": "very_interested",
          "text": "Very interested, actively looking."
        },
        {
          "value": "somewhat_interested",
          "text": "Somewhat interested, keeping options open."
        },
        {
          "value": "just_browsing",
          "text": "Just browsing for now."
        }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        {
          "value": "resident_explorer",
          "text": "I live here and love exploring locally."
        },
        {
          "value": "considering_move",
          "text": "I'm considering moving to this area."
        },
        {
          "value": "just_visiting",
          "text": "Just visiting for the open house."
        }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        {
          "value": "design_layout",
          "text": "The design and layout."
        },
        {
          "value": "location_neighborhood",
          "text": "The location and neighborhood."
        },
        {
          "value": "home_price",
          "text": "The price of the home."
        }
      ]
    }
  ],
  "deploymentInfo": {
    "repoId": "1086002983",
    "repoName": "Open-House-129",
    "repoUrl": "https://github.com/arslvn93/Open-House-129",
    "tag": "Open House 10 Culpepper Crt",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/KyeQTgnX03giMLGAsQCM/webhook-trigger/e68e05b8-4715-429e-8bda-a60fcd2ec132",
    "siteId": "0f018bc6-26fd-405f-afb1-67f9112a6062"
  }
};