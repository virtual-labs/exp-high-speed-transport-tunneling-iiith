
# **High-Speed Devices: Drift/Diffusion, Tunnel Diodes, and IMPATT Diodes**

---

## **Introduction**

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

> **[Insert schematic diagram comparing drift/diffusion region,
tunneling barrier, and IMPATT diode structure here]**

---

## **Drift/Diffusion Transit Time**

For a **uniformly doped semiconductor slab** of length **L** subjected
to an electric field **E**, the **carrier drift velocity** is:

$$ v_d = \mu E \tag{1} $$

where **μ** is the carrier mobility.  
At **high fields**, velocity saturates at **$v_{sat}$**, giving:

$$ v_d = \frac{\mu E}{1 + \dfrac{\mu E}{v_{sat}}} \tag{2} $$

The **mean drift transit time** is then:

$$ \tau_{dd} = \frac{L}{v_d} \tag{3} $$

> **[Insert graph of $v_d$ vs. $E$ showing linear region and velocity saturation]**

---

## **Quantum Tunneling Transit Time**

For a **barrier** of width **W** and height **$U_0$**, the **WKB
approximation** gives the **transmission probability**:

$$
T(E) \approx \exp \left(
-\dfrac{2}{\hbar} \int_0^W \sqrt{2m^*(U(x) - E)} \, dx
\right) \tag{4}
$$

where **$m^*$** is the **effective mass** and **E** the carrier energy.

The **effective tunneling transit time** is often estimated as:

$$ \tau_{tun} \approx \dfrac{\hbar}{\Delta E} \tag{5} $$

where **ΔE** is the **energy uncertainty** associated with the tunneling
process.

> **[Insert energy band diagram of tunneling barrier with incident and transmitted wavefunctions]**

---

## **Esaki (Tunnel) Diode Theory**

A **tunnel diode** consists of a **heavily doped p⁺n⁺ junction** with a
**depletion width ≈ 10 nm**.  
Its **I--V characteristic** is dominated by **interband tunneling**:

1.  **Low forward bias** → Filled conduction-band states on the
    **n-side** align with empty valence-band states on the **p-side**,
    enabling **tunneling** and producing a **current peak** at
    **$V_P$**.
2.  **Moderate bias** → The overlap decreases, reducing current
    (**negative resistance region**).
3.  **High bias** → Normal diffusion current dominates again.

The **Peak-to-Valley Current Ratio (PVCR)** is:

$$ PVCR = \dfrac{I_P}{I_V} \tag{6} $$

where **$I_P$** is the **peak current** and **$I_V$** the **valley current**.

> **[Insert I--V characteristic of tunnel diode with $V_P$, $V_V$, and negative-resistance region highlighted]**  
> **[Insert band diagrams for $V < V_P$, $V = V_P$, and $V > V_V$ showing overlap changes]**

---

## **IMPATT Diode Theory**

An **IMPATT** (**Impact Avalanche Transit-Time**) diode combines two
regions:

-   **Avalanche Region** → Reverse-biased beyond **breakdown**; carriers
    undergo **impact ionization** with multiplication factor **M**.
-   **Drift Region** → Carriers traverse at **near $v_{sat}$**, introducing a **phase delay**
    between **voltage** and **current**.

The **avalanche buildup time ($\tau_a$)** and
**drift time ($\tau_d$)** together set the
**oscillation frequency**:

$$ f_{osc} \approx \dfrac{1}{\tau_a + \tau_d} \tag{7} $$

where drift time is given by:

$$ \tau_d = \dfrac{L_d}{v_{sat}} \tag{8} $$

The **output RF power** is given by:

$$ P_{out} \approx \dfrac{1}{2} \, V_{RF} I_{RF} \, \eta_c \tag{9} $$

where **$\eta_c$** is the **circuit efficiency**.

> **[Insert schematic of avalanche and drift regions with field profile and carrier motion over one RF cycle]**  
> **[Insert graph of RF voltage and current waveforms showing phase shift due to transit time]**

---

## **Summary of Key Equations**

| **Equation** | **Expression** | **Description** |
|-------------|----------------|------------------|
| (1) | $v_d = \dfrac{\mu E}{1 + \mu E / v_{sat}}$ | Drift velocity |
| (2) | $\tau_{dd} = \dfrac{L}{v_d}$ | Drift/diffusion transit time |
| (3) | $T(E) \approx \exp \left( -\dfrac{2}{\hbar} \int_0^W \sqrt{2m^*(U(x)-E)} \, dx \right)$ | Tunneling probability |
| (4) | $PVCR = \dfrac{I_P}{I_V}$ | Peak-to-valley current ratio |
| (5) | $f_{osc} \approx \dfrac{1}{\tau_a + \tau_d}$ | IMPATT oscillation frequency |

These relationships form the **theoretical basis** for analyzing:

-   **High-speed carrier transport**
-   **Negative-resistance switching**
-   **Microwave generation** in **advanced semiconductor devices**.

---

## **Suggested References**

1.  **B. G. Streetman** and **S. Banerjee**, *Solid State Electronic Devices*
2.  **S. M. Sze** and **K. K. Ng**, *Physics of Semiconductor Devices*
3.  **T. Gonzalez** and **J. Mateos**, *High-Speed Semiconductor Devices*
