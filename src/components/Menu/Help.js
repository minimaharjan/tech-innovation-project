import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Help() {
  return (
    <Container fluid className="h-100">
      <Row className='h-100 overflow-auto'>
        <Col xs={12} md={3}>
          {/* -------------------------------- Table of Contents -------------------------------------- */}
          <div style={{ position: "sticky", top: 0, height: "100%", overflowY: "auto", paddingRight: "20px" }}>
            <h2>Table of Contents</h2>
            <ul>
              <li><a href="#about-snaa">About SNAA</a></li>
              <li><a href="#setup-snaa">Setup SNAA</a></li>
              <li><a href="#files">Files</a></li>
              <li><a href="#start-snaa-visualization-session">Start SNAA Visualization Session</a></li>
              <li><a href="#network-graph-options">Network Graph Options</a></li>
              <li><a href="#network-graph-statistics">Network Graph Statistics</a></li>
              <li><a href="#modes">Modes</a></li>
              <li><a href="#simulation">Simulation</a></li>
              <li><a href="#estimation">Estimation</a></li>
              <li><a href="#goodness-of-fit">Goodness of Fit</a></li>
              <li><a href="#bayesian-estimation">Bayesian Estimation</a></li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={9} className="h-100 overflow-auto" style={{ scrollBehavior: "smooth"}}>
          {/* -------------------------------- About SNAA -------------------------------------- */}
          <h1 id="about-snaa">About SNAA</h1>
          <p align="justify">The Social Network Analysis Application (SNAA) is a cross-platform application for statistical analysis of Exponential Random Graph Models (ERGMs) with graphic visualisation capabilities. The architecture is based on SNA Sandbox’s existing software MPNet, for  statistical analysis capabilities and VPNet graphic statics visualisation of ERGMs. SNAA is designed with one-mode modelling. SNAA is a prototype with one major functionality: <i>Simulation</i>. There are 3 additional functionalities that are not operational at the present, these are: Estimation, Goodness of Fit, and Bayesian Estimation.</p>

          <b>Simulation:</b><br></br>
          <p align="justify">Simulating a network or attribute distributions with specified model parameter values.</p>

          <b>Estimation:</b><br></br>
          <p align="justify">Estimating specified ERGM parameters for a given network using Markov Chain Monte Carlo Maximum Likelihood Estimation (MCMCMLE) (Snijders, 2002), or Bayesian approximation algorithms with and without missing data (Caimo and Friel, 2011; Koskinen et al, 2011; 2013).</p>

          <b>Goodness of Fit:</b><br></br>
          <p align="justify">Testing the Goodness of fit for statistical methods used to assess how well a specific model, distribution, or hypothesis fits observed data with the specified parameters.</p>

          <b>Bayesian Estimation:</b><br></br>
          <p align="justify">Based on Bayes' theorem, Bayesian estimation combines prior knowledge or beliefs with observed data to provide an understanding of unknown parameters or the underlying probability distribution. </p>

          <br></br>
          {/* ... */}
          {/* -------------------------------- Setup SNAA -------------------------------------- */}
          <h1 id="setup-snaa">Setup SNAA</h1>
          <p align="justify">SNAA presents a clean interface with minimal options, a design decision aimed at reducing user confusion regarding available choices. The navigation has three menus, with sub menus within the predominant tabs.</p>

          <ul>
            <li>
              <b>Files:</b> Visualise the uploaded network data based on the users designated options, and close the graph (if a graph is present)
            </li>
            <li>
              <b>Mode:</b> Presents a range of session functionality including Simulation, Estimation GOF, and Bayesian Estimation.
            </li>
            <li>
              <b>Help:</b> A user guide for the application.
            </li>
          </ul>
          <p align="justify">When a CSV file containing the correct network data and edges are uploaded, a visualised network will be displayed.</p>


          {/* ... */}
          {/* -------------------------------- Files -------------------------------------- */}
          <h2 id="files">Files</h2>

          <p align="justify">The “File” tab within the navigation is responsible for the network visualisation. Two buttons are present under this option being “Upload Network Data” and “Close Current Graph”. “Upload Network Data” can allow the network to be visualised, “Close Current Graph” ceases the visualisation if one is opened.</p>

          {/* ... */}
          {/* -------------------------------- Start SNAA Visualization Session -------------------------------------- */}
          <h3 id="start-snaa-visualization-session">Start SNAA Visualization Session</h3>
          <p align="justify">Select the option “Upload Network Data” under the “Files” navigation option. SNAA can only accept CSV formatted datasets. Within the prompt box, select the desired dataset and press “Open”.</p>

          <p align="justify"><b>Screenshot here</b></p>

          <p align="justify">Visualisation options should prompt. Five options are available being: an one and off toggle for “Directed Graph”, a mandatory “Node Linking Attribute”, optional “Node Grouping Attribute” and “Label Column for Nodes”, and the required “Edge/Link CSV File”. During this prototype, nodes “Linking Attribute”, “Grouping Attribute”, and “Label Column for Nodes” should not match.</p>

          <p align="justify"><b>Screenshot here</b></p>

          <ul align="justify">
            <li>
              <b>“Directed Graph”</b> is a toggleable option. Direct graphs represent the direct connection with a node through an arrow symbol, while non-direct graphs do not include arrows.
            </li>
            <li>
              <b>“Select Node Linking Attribute” </b> is a <i>mandatory</i> option that enables users to specify an attribute that dictates how nodes are interconnected within the network.
            </li>
            <li>
              <b>“Node Grouping Attribute”</b> is an optional feature used for grouping or categorising network data based on a selected attribute.
            </li>
            <li>
              <b>“Label Column for Nodes” </b> is an optional feature used to assign labels or textual information to nodes in the network's visualisation.
            </li>
            <li>
              <b>“Select Edge/Link CSV File” </b> is a <i>mandatory</i> option used to define the edges or links in a network by specifying the source and target nodes for each connection.
            </li>
          </ul>

          <p align="justify">Once the chosen options have been selected, press “Save Setting” to upload the graph. The network graph will now be visualised on the main interface.</p>

          <p align="justify"><b>Screenshot here</b></p>


          {/* ... */}
          {/* -------------------------------- Network Graph Options -------------------------------------- */}
          <h3 id="network-graph-options">Network Graph Options</h3>
          <p align="justify">Uploaded graphs will be displayed on the home page. Hovering over a node within the graph will display a close interaction with other nodes. The generated graph may have slight visual variations depending on whether the "Node Grouping Attribute" or "Label Column for Nodes" is selected. If the "Node Grouping Attribute" is selected, a group legend will appear above the graph. Groups can be removed from the graph by clicking the colour-coded group within the legend, and the group can be restored by selecting the greyed-out group. To capture the current graph's position within the application, press the [Save Image symbol]. For a full-screen preview of the graph, press the [Eyeball Symbol]. Detailed graph statistics can be accessed through the "Show Graph Statistics" option.</p>

          <p align="justify"><b>Screenshot here</b></p>
          {/* ... */}
          {/* -------------------------------- Network Graph Statistics -------------------------------------- */}
          <h4 id="network-graph-statistics">Network Graph Statistics</h4>
          <p align="justify">Graph Summary Statistics offer an overall description of the network's structure. These may encompass statistics such as the total number of nodes, the total number of edges, density (the proportion of possible edges that are present), and the average degree (the average number of connections per node). The specific statistics depend on the chosen "Network Graph Options," and the results of "Network Graph Statistics" can vary depending on the selections made.</p>

          <p align="justify">Pressing "Show Graph Statistics" opens a window that describes the "Network Graph Statistics." It displays the "Graph Summary," "Graph Connectivity" (if the graph is directed), and "Graph Clustering." Below the statistics, there is a bar graph illustrating the network's degree distribution, and additional graphs may be included below based on the selected network graph options.</p>

          <p align="justify"><b>Screenshot here</b></p>

          <p align="justify">Pressing "Download Graph Statistics" will open a "save as" window, enabling users to save the descriptive statistics. The file will be saved as a PDF, which will include a screenshot of the graph network, along with all the content within the "Network Graph Statistics."</p>

          {/* ... */}
          {/* -------------------------------- Modes -------------------------------------- */}
          <h2 id="modes">Modes</h2>
          <p align="justify">The "Modes" tab within the navigation is responsible for ERGMs simulation. SNAA offers four radio buttons containing the modes: Simulation, Estimation, GOF, and Bayesian Estimation. By default, SNAA uses ERGMs. <em>Note*, only Simulation will be implemented in prototype.</em></p>

          <ul align="justify">
            <li>
              <b>“Simulation”</b> can generate synthetic networks that resemble structural properties of observed network's.
            </li>
            <li>
              <b>“Estimation”</b> involves the identification of model parameters that best describe the observed network data, underlying processes governing network formation.
            </li>
            <li>
              <b>“GOF”</b> assessment helps determine how well the ERGM data fits with the observed network data. It helps evaluate the adequacy of the model in capturing the network's structural features.
            </li>
            <li>
              <b>“Bayesian estimation”</b> aims to estimate the  parameters of a statistical model while considering the uncertainty associated with these estimates. The framework uses probabilistic reasoning about unknown quantities, taking into account both prior information and the likelihood of observed data.
            </li>
          </ul>

          <p align="justify"><b>Screenshot here</b></p>
          {/* ... */}
          {/* -------------------------------- Simulation -------------------------------------- */}
          <h3 id="simulation">Simulation</h3>
          {/* Description Here */}

          <h4>Simulation Options</h4>

          <p align="justify">Enabling the "<b>Sample networks</b>" option allows the program to create sample graphs in an adjacency matrix format. It also provides additional graph statistics like degree distributions and global clustering. The sample files are designed to work with the Pajek program, making it easier to visualise the simulated samples. However, generating a large number of samples (specified by the 'Samples' setting) may take a considerable amount of time depending on the computer specifications.</p>

          <p align="justify">When the "<b>Sample degree distribution</b>" option is checked, SNAA will create degree distributions for the simulated samples. The information is provided in a tab-delimited format, along with the standard deviation and skewness of these degree distributions.</p>

          <p align="justify">“<b>Burn-in</b>” is the initial part of the simulation where the system is getting itself ready to match your desired setup based on the rules you've set. The burn-in requirements can vastly vary depending on the network's size and the number of parameters used. Analysing the output files can reveal whether the simulation has achieved a stable state and if the burn-in period is satisfactory (For example, the number connections consistently around a mean within a stationary graph distribution).</p>

          {/* GCD is Unaltered text from MPNet */}
          <p align="justify">The “<b>Generate GCD</b>” option will be implemented in a future release. It is only used in model estimation or GOF testing with generalized Cook’s distances (GCDs) for each node as a measure of how extreme or important each node is in contributing towards the network structure (see Koskinen et al 2013 for more details) </p>

          <p align="justify">The "<b>Iterations</b>" field displays the count of simulated updates suggested after the burn-in period.</p>

          <p align="justify">The "<b>Samples</b>" field represents the quantity of graphs drawn from the simulation. Note, the interval between graph samples is determined by dividing the number of iterations by the number of samples to be taken.</p>

          <p align="justify">To initiate the simulation, click on the "<b>Start</b>" button located in the upper right corner of the navigation bar.</p>

          <p align="justify"><b>Screenshot here</b></p>

          <h4>Simulation Output</h4>

          <p align="justify"><b>Description here</b></p>
          <p align="justify"><b>Screenshot here</b></p>
          {/* ... */}
          {/* -------------------------------- Estimation -------------------------------------- */}
          <h3 id="estimation">Estimation</h3>

          <p align="justify">When estimating ERGM parameters within the SNAA, users are required to define the network data to model, provide the ERGM specification, and configure certain estimation options. The MCMCMLE (Markov Chain Monte Carlo Maximum Likelihood Estimation) algorithm offers various customizable settings and options, and making modifications to these settings can assist in achieving model convergence.</p>

          <h4>Estimation Options</h4>

          <p align="justify">Each <b>"Subphase"</b> serves to fine-tune the parameter values, but having more subphases does not guarantee convergence. The default subphase value is 5. When a solid set of initial parameter values is present, using a smaller number of subphases may accelerate the estimation process.</p>

          <p align="justify">The "<b>Gaining Factor</b>" is a multiplier that influences the sizes of parameter updates. It is halved after each subphase to fine-tune the parameter values as the model converges. The default a-value is 0.01. You can consider using smaller a-values if you have a well-suited set of initial parameter values. </p>

          <p align="justify">The "<b>Multiplication Factor</b>" is a multiplier that determines the simulation interval between network samples during estimations; various factors may include the network size and density. A higher multiplication factor leads to larger gaps between network samples, reducing auto-correlations can potentially provide a more reliable model. Networks with a greater number of nodes may require a larger multiplication factor to achieve model convergence, though this will also increase the estimation time. The default multiplication factor value is 10, though directed networks and larger networks will require a greater multiplication factor. It is uncommon for estimations to require a multiplication factor exceeding 100. If the SACF (as described in the OUTPUT) is greater than 0.4, you should consider increasing the multiplication factor.</p>

          <p align="justify">SNAA conducts <b>“Iterations in Phase 3</b>” to simulations of network graphs using estimated parameters obtained from phase 2. It then generates t-statistics by comparing the distribution of simulated graphs to the observed graph statistics. The default value is 500 samples. Note, the interval between simulation updates is the same as during the estimation phase, and is determined by factors such as network size, network density, and the multiplication factor.</p>

          <p align="justify">The “<b>Max. estimation runs</b>” executes one estimation and then stops by default. Multiple consecutive estimation runs can be conducted, with each new run utilising the parameter values obtained from the end of the previous run. Improved parameter estimation may be obtained closer to convergence. If the model converges, the SNAA will terminate and disregard any subsequent estimation runs. </p>

          <p align="justify">Upon achieving convergence , “<b>Do GOF at convergence</b>” can conduct a GOF assessment for the model being estimated.</p>

          <h4>Estimation Output</h4>
          {/*  */}
          <p align="justify">At present, SNAA does not support the Estimation Mode.</p>
          {/* ... */}
          {/* -------------------------------- Goodness of Fit -------------------------------------- */}
          <h3 id="goodness-of-fit">Goodness of Fit</h3>

          <p align="justify">Once an ERGM has successfully converged, you can check the goodness of fit (GOF) by comparing the simulated data of the estimated model against the actual network it represents. You can explore various network configurations, not just the ones in the initial model. To initiate a model GOF session, select “Mode” within the navigation bar and choose the “GOF” radio button.</p>

          <p align="justify">GOF maintains the same options as Simulation (refer to “Simulation Options” for option description), with the exception of required network data and parameter values. Under the “Files” tab within the navigation bar, press the “Upload Network Data” option and select a CSV file. The “Select Network Graph Options” will prompt, select the appropriate options and upload the required network edge files. Select “Save Setting” to upload the graph. To select the required parameters, select “Model Specification” within the navigation bar and choose “Parameters”.</p>

          <p align="justify">During the model parameters selection, clicking the "Select All" button will implement all statistics in the GOF simulation.</p>

          <p align="justify"><b>Screenshot here</b></p>

          <p align="justify">Once the GOF simulation has concluded, the SNAA will compute t-ratios for all the graph statistics included</p>

          <ul align="justify">
            <li>
              For configurations already integrated into the model:
              <ul>
                <li>T-ratios with absolute values <b>&lt;</b> 0.1 serve as a confirmation of model convergence.</li>
                <li>If any discrepancy between the estimation convergence statistics and the GOF t-ratios, increasing the iteration ratio to the number of samples may be required.</li>
              </ul>
            </li>
            <li>
              For other statistics:
              <ul>
                <li>T-ratios with absolute values <b>&lt;</b> 2.0 indicate a satisfactory fit to that specific graph feature.</li>
                <li>T-ratios with standard deviation units <b>&gt;</b> 2.0 suggests a poor fit to the data regarding that particular graph feature.</li>
              </ul>
            </li>
          </ul>


          <h4>Goodness of Fit Output</h4>
          {/*  */}
          <p align="justify">At present, SNAA does not support the GOF Mode.</p>
          {/* ... */}
          {/* -------------------------------- Bayesian Estimation -------------------------------------- */}
          <h3 id="bayesian-estimation">Bayesian Estimation</h3>

          <p align="justify">SNAA plans to employs a variation of the Bayesian estimation algorithm introduced by Camio and Friel in 2009, as described in Koskinen et al. (2013). In contrast to MCMCMLE that provides point estimates, Bayesian estimation produces posterior distributions of model parameters.  Posterior distribution refers to the probability distribution of model parameters, or unobserved variables after taking into account both prior information and observed data. Instead of utilising MLEs and Standard Errors, SNAA employs Point Estimates and Measures of Uncertainty by computing averages and standard errors from this distribution. This approach eliminates the need for the approximations used in “Iterations in Phase 3”. However, it's crucial to assess "mixing," which refers to how effectively the algorithm samples from the posterior.</p>

          <h4>Bayesian Estimation Options</h4>

          {/* Whole section is copied from MPNet Manual */}

          <p align="justify"><b>Parameter burn-in</b>: similar to burn-in for simulations, the starting parameters may be considered extreme from the posterior parameter distribution. The burn-in will discard the specified number of parameter updates at the beginning of the estimation.</p>

          <p align="justify"><b>Proposal scaling</b>: similar to a-values in maximum likelihood estimations (MLEs), the proposal scaling (or 'step-size constant'; Tierney, 1994) is a multiplier for the sizes of parameter updates. Greater scaling will cover greater range for parameter proposals; however, greater scaling may also reduce the number of accepted parameter proposals as part of the posterior. The proposal distribution in the Metropolis algorithm is Np(θ,S), where θ is the current value, S=c/√(1+p) Σ, and Σ is some estimate of the variance-covariance matrix of the posterior distribution. In this expression c is the 'proposal scaling'. </p>

          <p align="justify"><b>Multiplication factor</b>: is the same as in MLEs, and determines the number of iterations to be simulated in order to generate a network given a proposed parameter. The multiplication factor generally speaking should be about three times as large as for the non-Bayesian algorithm.</p>

          <p align="justify"><b>MCMC Sample size</b>: is the number of parameter proposals. If all parameter proposals are accepted, the posterior will contain this number of parameter sets. (Note that achieving 100% acceptance of proposed parameter values is not the goal of the estimation. Acceptance of all proposals suggesting the resulting posterior may only cover part of the actual posterior, and a greater proposal scaling may be required.) The larger the MCMC Sample size, the better the precision of the posterior mean and standard deviation (given a fixed acceptance rate).</p>

          <p align="justify"><b>Max. estimation runs, Do GOF at convergence</b> and <b>Generate GCD</b> at convergence: they are not applicable in Bayesian estimations.</p>

          <p align="justify"><b>Maximum lag (SACF)</b>: determines the largest lag (distance) for which the sample autocorrelation function for the estimated posterior is. In order for the effective sample size (ESS) to be reliable, the autocorrelation at the Maximum lag has to be sufficiently close to zero (as a rule of thumb, smaller than 0.05 in absolute value). The lag at which the SACF value is approximately zero gives the number of parameter draws you need to discard in-between every successive parameter value that you base your posterior inference on. For example, if the SACF at lag 100 is approximately zero, then you need an MCNC sample size of 100,000 to get 1000 independent draws from the posterior distribution. If the SACF at lag 100 is greater than, say, 0.4 you need to modify the parameter proposals by increasing the 'proposal scaling'.

          <br></br> <br></br>
          There are several possible matrices we may apply to Bayesian estimation which is used for determining the ‘direction’ of parameter updates. There are four options approximating Σ, which is used to set the proposal variance-covariance matrix through S=c/√(1+p) Σ.

          </p>

          <p align="justify"><b>Scaled identity matrix</b>: An identity matrix that implies no preferred direction of updates. The directions of updates are solely based on the difference statistics between the observed graph and the simulated samples.</p>

          <p align="justify"><b>Combined simulation</b>: only applicable for Bayesian estimations with missing data as in Koskinen et al (2013). See more detailed instructions in the next section.</p>

          <p align="justify"><b>Nonconditional simulation</b>: the differences between the observed graph and the simulated samples are refined by a covariance matrix generated based on a simulation with the starting parameters.(This is an analogous procedure to the one employed in Phase 1 of the nonBayesian estimation)</p>

          <p align="justify"><b>Covariance file</b>: A user defined covariance matrices of the parameters are used to refine the direction of parameter updates. The covariance file is a p by p matrix if there are p parameters in the model. Such covariance files may be obtained based on previous estimations of the same model. MPNet generates such files at the end of estimations with file name e.g. “MySession_varcov.txt”. If this estimate of Σ is close to the true posterior variance-covariance matrix, the proposal scaling c should be in the range of 0.5 to 4.</p>

          <h4>Bayesian Estimation Output</h4>
          {/*  */}
          <p align="justify">At present, SNAA does not support the Bayesian Estimation Mode.</p>
          {/* ... */}
        </Col>
      </Row>
    </Container>
  );
}

export default Help;
