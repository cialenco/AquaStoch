---
layout: post
title: Chino Basin Water Rights - An Empirical Overview
author: Paul Balea
date: 2026-04-05
date-modified: 2026-04-08
toc: true
title-block-banner: true
categories: [Groundwater, Data]
related_publications: true
bibliography: papers.bib
hidden: false
---



## Introduction

Understanding water market dynamics requires detailed data on both historical transactions and water rights allocations. However, such data are largely nonexistent. This work focuses on the Chino Basin and represents the first systematic effort to collect, process, and represent these critical inputs, providing a structured basis for analyzing trading behavior and market outcomes, supporting the novel stochastic game-theoretic model of groundwater rights trading among rational agents introduce in  (Cialenco & Ludkovski, 2025).



<!-- This post documents the data processing and market structure work that supports (Cialenco & Ludkovski, 2025), which introduces a stochastic game-theoretic model of groundwater rights trading among rational agents. Important inputs for model calibration and analyzing market dynamics are the water rights allocations, $W_j$, and the historical record of trades $\psi_j$ among agents.  -->


## Basin Background

The Chino Basin is located in San Bernardino County, approximately 35-45 miles east of Los Angeles.It encompasses approximately 220 square miles. This  basin was adjudicated in 1978 by the San Bernardino County Superior Court and established the Chino Basin Watermaster (cbwm.org). 

<!-- Pumping rights are allocated across three pools: overlying agricultural, overlying non-agricultural, and appropriative. 
The Chino Basin Watermaster (cbwm.org) manages the basin, which was adjudicated according to the 1978 Judgement. -->

The basin has a three-pool structure, where

- **Pool 1 - Overlying (Agricultural):** farmers, agricultural producers, and the State of California. These rights are not tradeable.

- **Pool 2 - Overlying (Non-Agricultural):** industrial and commercial water users. These rights are tradeable.

- **Pool 3 - Appropriative:** cities, special districts, and utilities that pump groundwater for public water supply purposes. These rights are also tradeable.


<div class="row justify-content-sm-center">
  <div class="col-12 mt-3">
      {% include figure.liquid path="assets/fig/pool2_entity_map.png" 
    title="Pool 2. Complete Entity Map" 
    caption = "Fig 1: Pool 2 - Complete Entity Map" %}
  </div>
</div>

In the original 1978 Judgement, there is a distinction between the original allocation and the Safe Yield (SY). Safe yield is the amount the basin can sustainably produce annually in perpetuity, the renewable, long-term yield of the aquifer. This is important, because the safe yield is what the entities actually trade. Total Allocated AF (acre-feet) is larger, because it also includes a share of the controlled overdraft, a finite one-time drawdown of groundwater storage that the court allowed parties to pump beyond safe yield.

## The Data
**say from where the data was obtained. Waterbaster web-site. How it is porcessed, etc. **

All water transactions are measured in acre-feet (AF) - the volume of water needed to cover one acre of land to a depth of one foot, equivalent to approximately 326,000 gallons. **Say something about Pool 1. No transaction information is available for Pool 1.**  Pool 2 (Non-Agricultural) has a total Safe Yield of 7,366 AF. Transactions between entities exist for both Pool 2 and Pool 3. A total Safe Yield figure for Pool 3 is not available in the primary sources. 

Transactions are structured in three ways: permanent, tenants in common, and jointly held. A permanent transfer is an outright transfer of water rights from one entity to another. Tenants in common is a co-ownership of a water rights block by two parties with a negotiated priority structure. Jointly held with agreed priorities is slightly different than tenants in common in that the priority structure was explicitly negotiated. The Kaiser/CSI 630.274 AF arrangement in the Pool 2 transactions is described as jointly held. Transactions in both Pools 2 and 3 have either precise decimals or round numbers. Round numbers in transactions come from negotiated transfers, and precise decimals trace back to the 1978 Judgement allocations.

## Market Observations
Pool 2 is an infrequently traded market with 25 transactions between 19 entities, spanning over 40 years.

<!-- ![Pool 2 Transaction Chart](pool2_lollipop.png)
*Fig 2: Pool 2 - All Water Rights Transactions Over Time* -->

<div class="row justify-content-sm-center">
  <div class="col-12 mt-3">
      {% include figure.liquid path="assets/fig/pool2_lollipop.png" 
    title="Pool 2. Water rights transactions" 
    caption = "Fig 1: Pool 2, water rights transactions" %}
  </div>
</div>





**make bullet point of these**
Kaiser Steel was a dominant original holder, but later divested all their rights. City of Ontario was the biggest accumulator, accumulating 3,920.567 AF SY of water rights over time. This is over 53% of the entire Pool 2 Safe Yield, acquired through six separate acquisitions between 2008 and 2018. Pool 2 trading is heavily clustered during these two periods 1995-2000, Kaiser's divestiture and 2008-2018, Ontario's accumulation. ACM (Aqua Capital Management) acquired rights from CCG Ontario and Calmat in 2008-2009 and then sold them off entirely by 2015. This behavior is unlike any other entity in the pool, and suggests a speculative or arbitrage motive unlike other long-term holders in Pool 2.

<video width="100%" controls>
  <source src="{{'/assets/video/pool2_animation.mp4' | relative_url }}" type="video/mp4">
</video>

*Fig 3: Pool 2 - Water Rights Allocations Over Time*

Pool 3 is also infrequently traded due to the nature of the Appropriative pool, where rights are primarily held by public water agencies. Pool 3 had 12 transactions since 1978.

<!-- ![Pool 3 Transaction Chart](pool3_lollipop.png)
*Fig 4: Pool 3 - All Water Rights Transactions Over Time* -->

<div class="row justify-content-sm-center">
  <div class="col-12 mt-3">
      {% include figure.liquid path="assets/fig/pool3_lollipop.png" 
    title="Pool 3. Water rights transactions" 
    caption = "Fig 1: Pool 3, water rights transactions" %}
  </div>
</div>



**make bullet points here too**
Pool 3 activity is concentrated entirely in 1978-2002, driven by the consolidation of smaller water companies into larger public agencies. Many entities in the Appropriative pool retained their entire share of the water rights, not making any trades. Unlike Pool 2, Pool 3 has no tenants in common or jointly held agreements, only permanent transfers. 

**a movie here for Pool 3?**


## Limitations
**maybe bullet points here too**
With all of the information that we have regarding the Chino Basin, there are still significant limitations. The biggest of these is that there is no transaction pricing data for any of the permanent Pool 2 or Pool 3 rights transfers. Without this, it isn't possible to characterize the price at which rights have historically traded, which is a crucial input for calibrating the model. In addition to this, we don't have access to older annual reports, which would provide additional insight into historical transactions. The documents we have don't cover Pool 1 (Agricultural), as the rights are a shared pool and not individually tradeable, but it would have helped us build a more complete picture of basin-wide water use. There is a lack of information when it comes to water rights usage for entities that are holding tenants in common with each other. It isn't clear what percentage of the water rights each entity is allowed to utilize according to their agreements. Some of the historical transactions only contain years and not specific dates, which introduces uncertainty in the timeline of transactions. Lastly, some Pool 3 entities made no transfers of their original rights and therefore do not appear in the transaction data.