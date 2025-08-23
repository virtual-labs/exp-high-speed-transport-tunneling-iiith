# **5 High-Speed Devices: Drift/Diffusion, Tunnel Diodes, and IMPATT Diodes**

------------------------------------------------------------------------

## **5.1 Introduction**

High-speed semiconductor devices operate on **time scales** where
**carrier transit dynamics** become the primary limiting factor. Two
broad mechanisms dominate:

-   **Drift/Diffusion Transport** → Carriers accelerate under an
    electric field, limited by scattering and velocity saturation.
-   **Quantum Tunneling** → Carriers penetrate through potential
    barriers in **sub-picosecond times**, largely independent of
    scattering.

In addition, special devices such as the **Esaki (tunnel) diode**
exploit tunneling to achieve **negative differential resistance**, while
**IMPATT diodes** use **avalanche multiplication** combined with
**drift-region delay** to generate **microwave oscillations**.

> **\[Insert schematic diagram comparing drift/diffusion region,
> tunneling barrier, and IMPATT diode structure here\]**

------------------------------------------------------------------------

## **5.2 Drift/Diffusion Transit Time**

For a **uniformly doped semiconductor slab** of length **L** subjected
to an electric field **E**, the **carrier drift velocity** is:

\[ v_d = `\mu `{=tex}E `\tag{5.1}`{=tex} \]

where **μ** is the carrier mobility.\
At **high fields**, velocity saturates at
**v`<sub>`{=html}sat`</sub>`{=html}**, giving:

\[ v_d = `\frac{\mu E}{1 + \dfrac{\mu E}{v_{sat}}}`{=tex}
`\tag{5.2}`{=tex} \]

The **mean drift transit time** is then:

\[ `\tau`{=tex}\_{dd} = `\frac{L}{v_d}`{=tex} `\tag{5.3}`{=tex} \]

> **\[Insert graph of v`<sub>`{=html}d`</sub>`{=html} vs. E showing
> linear region and velocity saturation\]**

------------------------------------------------------------------------

## **5.3 Quantum Tunneling Transit Time**

For a **barrier** of width **W** and height **U₀**, the **WKB
approximation** gives the **transmission probability**:

\[ T(E) `\approx `{=tex}`\exp `{=tex}`\left`{=tex}(
-`\dfrac{2}{\hbar}`{=tex} `\int`{=tex}\_0\^W
`\sqrt{2m^*(U(x) - E)}`{=tex} , dx `\right`{=tex}) `\tag{5.4}`{=tex} \]

where **m\*** is the **effective mass** and **E** the carrier energy.

The **effective tunneling transit time** is often estimated as:

\[ `\tau`{=tex}\_{tun} `\approx `{=tex}`\dfrac{\hbar}{\Delta E}`{=tex}
`\tag{5.5}`{=tex} \]

where **ΔE** is the **energy uncertainty** associated with the tunneling
process.

> **\[Insert energy band diagram of tunneling barrier with incident and
> transmitted wavefunctions\]**

------------------------------------------------------------------------

## **5.4 Esaki (Tunnel) Diode Theory**

A **tunnel diode** consists of a **heavily doped p⁺n⁺ junction** with a
**depletion width ≈ 10 nm**.\
Its **I--V characteristic** is dominated by **interband tunneling**:

1.  **Low forward bias** → Filled conduction-band states on the
    **n-side** align with empty valence-band states on the **p-side**,
    enabling **tunneling** and producing a **current peak** at
    **V`<sub>`{=html}P`</sub>`{=html}**.
2.  **Moderate bias** → The overlap decreases, reducing current
    (**negative resistance region**).
3.  **High bias** → Normal diffusion current dominates again.

The **Peak-to-Valley Current Ratio (PVCR)** is:

\[ PVCR = `\dfrac{I_P}{I_V}`{=tex} `\tag{5.6}`{=tex} \]

where **I`<sub>`{=html}P`</sub>`{=html}** is the **peak current** and
**I`<sub>`{=html}V`</sub>`{=html}** the **valley current**.

> **\[Insert I--V characteristic of tunnel diode with
> V`<sub>`{=html}P`</sub>`{=html}, V`<sub>`{=html}V`</sub>`{=html}, and
> negative-resistance region highlighted\]**\
> **\[Insert band diagrams for V \< V`<sub>`{=html}P`</sub>`{=html}, V =
> V`<sub>`{=html}P`</sub>`{=html}, and V \>
> V`<sub>`{=html}V`</sub>`{=html} showing overlap changes\]**

------------------------------------------------------------------------

## **5.5 IMPATT Diode Theory**

An **IMPATT** (**Impact Avalanche Transit-Time**) diode combines two
regions:

-   **Avalanche Region** → Reverse-biased beyond **breakdown**; carriers
    undergo **impact ionization** with multiplication factor **M**.
-   **Drift Region** → Carriers traverse at **near
    v`<sub>`{=html}sat`</sub>`{=html}**, introducing a **phase delay**
    between **voltage** and **current**.

The **avalanche buildup time (τ`<sub>`{=html}a`</sub>`{=html})** and
**drift time (τ`<sub>`{=html}d`</sub>`{=html})** together set the
**oscillation frequency**:

\[ f\_{osc} `\approx `{=tex}`\dfrac{1}{\tau_a + \tau_d}`{=tex}
`\tag{5.7}`{=tex} \]

where drift time is given by:

\[ `\tau`{=tex}\_d = `\dfrac{L_d}{v_{sat}}`{=tex} `\tag{5.8}`{=tex} \]

The **output RF power** is given by:

\[ P\_{out} `\approx `{=tex}`\dfrac{1}{2}`{=tex} V\_{RF} I\_{RF}
`\eta`{=tex}\_c `\tag{5.9}`{=tex} \]

where **η`<sub>`{=html}c`</sub>`{=html}** is the **circuit efficiency**.

> **\[Insert schematic of avalanche and drift regions with field profile
> and carrier motion over one RF cycle\]**\
> **\[Insert graph of RF voltage and current waveforms showing phase
> shift due to transit time\]**

------------------------------------------------------------------------

## **5.6 Summary of Key Equations**

  ---------------------------------------------------------------------------------------------------------------------
  **Equation**       **Expression**                                                        **Description**
  ------------------ --------------------------------------------------------------------- ----------------------------
  (5.10)             (`\displaystyle `{=tex}v_d =                                          Drift velocity
                     `\frac{\mu E}{1 + \mu E / v_{sat}}`{=tex})                            

  (5.11)             (`\displaystyle `{=tex}`\tau`{=tex}\_{dd} = `\frac{L}{v_d}`{=tex})    Drift/diffusion transit time

  (5.12)             (`\displaystyle `{=tex}T(E)                                           Tunneling probability
                     `\approx `{=tex}`\exp`{=tex}`\left`{=tex}(-`\dfrac{2}{\hbar}`{=tex}   
                     `\int`{=tex}\_0\^W `\sqrt{2m^*(U(x)-E)}`{=tex} , dx `\right`{=tex}))  

  (5.13)             (`\displaystyle `{=tex}PVCR = `\dfrac{I_P}{I_V}`{=tex})               Peak-to-valley current ratio

  (5.14)             (`\displaystyle `{=tex}f\_{osc}                                       IMPATT oscillation frequency
                     `\approx `{=tex}`\dfrac{1}{\tau_a + \tau_d}`{=tex})                   
  ---------------------------------------------------------------------------------------------------------------------

These relationships form the **theoretical basis** for analyzing:

-   **High-speed carrier transport**
-   **Negative-resistance switching**
-   **Microwave generation** in **advanced semiconductor devices**.

------------------------------------------------------------------------

## **5.7 Suggested References**

1.  **B. G. Streetman** and **S. Banerjee**, *Solid State Electronic
    Devices*
2.  **S. M. Sze** and **K. K. Ng**, *Physics of Semiconductor Devices*
3.  **T. Gonzalez** and **J. Mateos**, *High-Speed Semiconductor
    Devices*
